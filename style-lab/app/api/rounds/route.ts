import { getChatGPTUser } from '../../chatgpt-auth';
import { getDb } from '../../../db';
import { reviews, submissions } from '../../../db/schema';
import { and, eq } from 'drizzle-orm';
import { batches, makeBrief, type Review } from '../../data';
import { z } from 'zod';
export const dynamic = 'force-dynamic';
export async function POST(req: Request) {
 const user = await getChatGPTUser(); if (!user) return Response.json({error:'Sign in required.'},{status:401});
 if (req.headers.get('origin') && req.headers.get('origin')!==new URL(req.url).origin) return Response.json({error:'Invalid origin.'},{status:403});
 let body; try {body=await req.json();} catch {return Response.json({error:'Invalid request.'},{status:400});}
 const parsed=z.object({batchId:z.string(),intention:z.string().max(4000)}).safeParse(body);
 if(!parsed.success) return Response.json({error:'Invalid request.'},{status:400});
 const data=parsed.data;
 const batch=batches.find(b=>b.id===data.batchId);
 if (!batch || typeof data.intention!=='string' || data.intention.length>4000) return Response.json({error:'Invalid round.'},{status:400});
 const db=getDb(), rows=await db.select().from(reviews).where(and(eq(reviews.userId,user.userId),eq(reviews.batchId,batch.id)));
 if (batch.studies.some(s=>!rows.find(r=>r.imageId===s.id && r.verdict))) return Response.json({error:'Give every image an overall verdict first.'},{status:400});
 const map:Record<string,Review>={}; rows.forEach(r=>{map[r.imageId]={imageId:r.imageId,batchId:r.batchId,verdict:r.verdict as Review['verdict'],ratings:JSON.parse(r.ratings),notes:r.notes};});
 const brief=makeBrief(batch,map,data.intention), submittedAt=new Date().toISOString();
 await db.insert(submissions).values({userId:user.userId,batchId:batch.id,brief,intention:data.intention,submittedAt}).onConflictDoUpdate({target:[submissions.userId,submissions.batchId],set:{brief,intention:data.intention,submittedAt}});
 return Response.json({batchId:batch.id,brief,intention:data.intention,submittedAt},{headers:{'Cache-Control':'no-store'}});
}

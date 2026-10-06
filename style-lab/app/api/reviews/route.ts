import { getChatGPTUser } from '../../chatgpt-auth';
import { getDb } from '../../../db';
import { reviews, submissions } from '../../../db/schema';
import { eq } from 'drizzle-orm';
import { batches, traitKey } from '../../data';
import { z } from 'zod';
export const dynamic = 'force-dynamic';
const json = (data: unknown, status = 200) => Response.json(data, { status, headers: { 'Cache-Control': 'no-store' } });
export async function GET() {
 const user = await getChatGPTUser(); if (!user) return json({error:'Sign in to save your review.'},401);
 const db = getDb();
 const [rows, rounds] = await Promise.all([db.select().from(reviews).where(eq(reviews.userId,user.userId)), db.select().from(submissions).where(eq(submissions.userId,user.userId))]);
 return json({reviews:rows.map(r=>({imageId:r.imageId,batchId:r.batchId,verdict:r.verdict,ratings:JSON.parse(r.ratings),notes:r.notes})), submissions:rounds.map(r=>({batchId:r.batchId,brief:r.brief,intention:r.intention,submittedAt:r.submittedAt}))});
}
export async function PUT(req: Request) {
 const user = await getChatGPTUser(); if (!user) return json({error:'Sign in to save your review.'},401);
 if (req.headers.get('origin') && req.headers.get('origin') !== new URL(req.url).origin) return json({error:'Invalid origin.'},403);
 let body; try { body = await req.json(); } catch { return json({error:'Invalid review.'},400); }
 const parsed=z.object({batchId:z.string(),imageId:z.string(),verdict:z.enum(['','keep','mix','pass']),notes:z.string().max(4000),ratings:z.record(z.union([z.literal(-1),z.literal(0),z.literal(1)]))}).safeParse(body);
 if(!parsed.success) return json({error:'Invalid review.'},400);
 const data=parsed.data;
 const batch = batches.find(b=>b.id===data.batchId), study = batch?.studies.find(s=>s.id===data.imageId);
 if (!study || !['','keep','mix','pass'].includes(data.verdict) || typeof data.notes!=='string' || data.notes.length>4000 || !data.ratings || typeof data.ratings!=='object' || Array.isArray(data.ratings)) return json({error:'Invalid review.'},400);
 const keys = new Set(study.traits.map(traitKey));
 if (Object.entries(data.ratings).some(([key,value])=>!keys.has(key) || ![-1,0,1].includes(value as number))) return json({error:'Invalid trait rating.'},400);
 const value = {userId:user.userId,imageId:data.imageId,batchId:data.batchId,verdict:data.verdict,ratings:JSON.stringify(data.ratings),notes:data.notes,updatedAt:new Date().toISOString()};
 await getDb().insert(reviews).values(value).onConflictDoUpdate({target:[reviews.userId,reviews.imageId],set:value});
 return json({saved:true});
}

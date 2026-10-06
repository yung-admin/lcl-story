import { requireChatGPTUser } from './chatgpt-auth';
import Lab from './lab';
export const dynamic = 'force-dynamic';
export default async function Page() {
 const user=await requireChatGPTUser('/');
 return <Lab userId={user.userId} />;
}

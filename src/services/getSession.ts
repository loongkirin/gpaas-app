import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/auth/authOptions';

export default async function getSession() {
  return await getServerSession(authOptions);
}
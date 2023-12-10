import { getServerSession } from 'next-auth';
import { authOptions } from '@/features/authentication/authOptions';

export default async function getSession() {
  return await getServerSession(authOptions);
}
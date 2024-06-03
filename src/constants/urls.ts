import { env } from '@/env';

export const BASE_URL = env.NEXT_PUBLIC_VERCEL_URL ? `https://${env.NEXT_PUBLIC_VERCEL_URL}` : 'http://localhost:3000';

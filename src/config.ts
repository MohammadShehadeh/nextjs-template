import type { Pathnames } from 'next-intl/navigation';

import { env } from './env';

export const host = env.NEXT_PUBLIC_VERCEL_URL;

export const defaultLocale = 'en' as const;
export const locales = ['en', 'ar'] as const;

export type Locale = (typeof locales)[number];

export const pathnames = {
  '/': '/',
  // this will map the desired pathname to the specified path for each language
  // '/pathnames': {
  //   en: '/pathnames',
  //   ar: '/pfadnamen',
  // },
  // '/dashboard': {
  //   en: '/pathnames',
  //   ar: '/pfadnamen',
  // },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;

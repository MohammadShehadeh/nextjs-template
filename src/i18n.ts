import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { locales, type Locale } from '@/config';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) notFound();

  return {
    // object that can be used to provide messages and other options based on the user's locale for usage in Server Components.
    messages: (await (locale === 'en' ? import('./messages/en.json') : import(`./messages/${locale}.json`))).default,
  };
});

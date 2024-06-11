import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  // Disabling trailing slash as Google Search Console
  // prefers avoiding forced trailing slash redirects
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
};

export default withNextIntl(nextConfig);

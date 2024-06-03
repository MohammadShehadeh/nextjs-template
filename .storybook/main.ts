import cx from 'classnames';
import type { StorybookConfig } from '@storybook/nextjs';

const rootClasses = cx(
  // Note: this is hard-coded sadly as next/font can only be loaded within next.js context
  'SOME_NEXTJS_FONT'
);

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  logLevel: 'error',
  typescript: { reactDocgen: false, check: false },
  core: { disableTelemetry: true, disableWhatsNewNotifications: true },
  framework: {
    name: '@storybook/nextjs',
    options: { builder: { useSWC: true } },
  },
  staticDirs: ['..\\public'],
  docs: {
    defaultName: 'Documentation',
  },
  previewBody: `<body class="${rootClasses}"></body>`,
};
export default config;

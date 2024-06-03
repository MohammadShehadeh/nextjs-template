import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      toc: {
        title: 'Table of Contents',
        disable: false,
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;

import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/components/stories/*.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      builder: {
        // Set useSWC to true if you want to try out the experimental SWC compiler in Next.js >= 14.0.0
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: true,
  },
};

export default config;

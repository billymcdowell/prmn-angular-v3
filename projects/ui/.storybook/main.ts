import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  "staticDirs": [{ from: '../docs', to: '/docs' }],
  "stories": [
    "../docs/**/*.@(mdx|md)",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-themes",
  ],
  "framework": "@storybook/angular"
};
export default config;
import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  "staticDirs": [{ from: '../docs', to: '/docs' }],
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../docs/**/*.@(mdx|md)",
  ],
  "addons": [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-themes",
    '@storybook/addon-mdx-gfm'
  ],
  "framework": "@storybook/angular",
  "previewHead": (head) => `
   ${head}
    <base href="/prmn-angular-v3/">
  `,
};
export default config;
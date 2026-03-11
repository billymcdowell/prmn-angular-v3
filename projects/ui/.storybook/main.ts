import type { StorybookConfig } from '@storybook/angular';

function normalizePublicPath(value: string | undefined) {
  if (!value) return undefined;
  // Ensure leading and trailing slash for Webpack publicPath.
  let v = value.trim();
  if (!v.startsWith('/')) v = `/${v}`;
  if (!v.endsWith('/')) v = `${v}/`;
  return v;
}

const storybookPublicPath = normalizePublicPath(process.env.STORYBOOK_PUBLIC_PATH);

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
  "framework": "@storybook/angular",
  webpackFinal: async (webpackConfig) => {
    if (storybookPublicPath) {
      webpackConfig.output = { ...(webpackConfig.output ?? {}), publicPath: storybookPublicPath };
    }
    return webpackConfig;
  },
  managerWebpack: async (webpackConfig) => {
    if (storybookPublicPath) {
      webpackConfig.output = { ...(webpackConfig.output ?? {}), publicPath: storybookPublicPath };
    }
    return webpackConfig;
  },
};
export default config;
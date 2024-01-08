import type { StorybookConfig } from "@storybook/nextjs";
import { Configuration } from "webpack";
import path from "path";

const config: StorybookConfig = {
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    "@storybook/addon-viewport",
    "@tomfreudenberg/next-auth-mock/storybook",
  ],
  webpackFinal: async (config: Configuration): Promise<Configuration> => {
    config.resolve = config.resolve || {};
    config.resolve.alias = config.resolve.alias || {};
    config.resolve.alias["@tomfreudenberg/next-auth-mock/storybook/preview-mock-auth-states"] =
      path.resolve(__dirname, "previewMockAuthStates.ts");

    return config;
  },
  framework: {
    name: "@storybook/nextjs",
    options: {
      builder: {
        useSWC: true, // Enables SWC support
      },
    },
  },
  stories: [
    {
      // 👇 Sets the directory containing your stories
      directory: "../app/components",
      // 👇 Storybook will load all files that match this glob
      files: "**/*.stories.*",
      // 👇 Used when generating automatic titles for your stories
      titlePrefix: "MyComponents",
    },
  ],
  docs: {
    autodocs: "tag",
  },
};
export default config;

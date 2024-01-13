import React from "react";
import "@/app/globals.css";
import type { Preview } from "@storybook/react";
import ModalsProvider from "@/app/providers/ModalsProvider";
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";

const preview: Preview = {
  decorators: [
    (Story) => (
      <>
        <ModalsProvider />
        <Story />
      </>
    ),
  ],
  parameters: {
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
    },
    themes: {
      themeOverride: "dark", // component level override
    },
    nextjs: {
      appDirectory: true,
    },
    actions: {
      argTypesRegex: "^on[A-Z].*",
    },
    controls: {
      matchers: {
        color: /(background|FF0000)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

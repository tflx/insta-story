import type { StorybookConfig } from "@storybook/web-components-vite"

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: false, // 👈 disable the backgrounds addon
      },
    },
    "@whitespace/storybook-addon-html",
  ],
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
}
export default config

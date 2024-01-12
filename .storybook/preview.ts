import type { Preview } from "@storybook/web-components"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    html: {
      root: "#root-inner",
      removeEmptyComments: true,
      removeComments: /^\?lit/, // default: false
      prettier: {
        tabWidth: 2,
        useTabs: false,
        htmlWhitespaceSensitivity: "strict",
      },
      highlighter: {
        showLineNumbers: true, // default: false
        wrapLines: false, // default: true
      },
    },
  },
}

export default preview

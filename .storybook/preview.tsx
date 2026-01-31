import type { Preview } from '@storybook/react-vite'
import type { ThemeConfig } from "storybook-addon-data-theme-switcher"
import PageStyle from '../src/components/page/styles/PageStyle';

export const initialGlobals = {
  dataTheme: "nature",
  dataThemes: {
    list: [
      { name: "Nature", dataTheme: "nature", color: "#00755e" },
      { name: "Pink Lemonade", dataTheme: "pinklemonade", color: "#ffb7d5" },
      { name: "Nazgul", dataTheme: "nazgul", color: "#313131" }
    ],
    dataAttribute: "data-theme",            // optional (default: "data-theme")
    clearable: true,                        // optional (default: true)
    toolbar: {
      title: "Change data-theme attribute", // optional
      icon: "PaintBrushIcon",               // optional
    },
  } satisfies ThemeConfig,
};

const preview: Preview = {
  decorators: [
    (Story, context) => (
      <PageStyle theme={context.globals.dataTheme}>
        <Story />
      </PageStyle>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;
import type { Preview } from "@storybook/react";
import "../src/styles/global.css";

const preview: Preview = {
  decorators: [
    (Story) => {
      document.documentElement.classList.add("dark");
      return <Story />;
    },
  ],
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#0a0a0a" },
        { name: "light", value: "#fafafa" },
      ],
    },
  },
};

export default preview;

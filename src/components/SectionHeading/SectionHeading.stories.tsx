import type { Meta, StoryObj } from "@storybook/react";
import { SectionHeading } from "./SectionHeading";

const meta = {
  title: "Components/SectionHeading",
  component: SectionHeading,
} satisfies Meta<typeof SectionHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithSubtitle: Story = {
  args: {
    title: "Projects",
    subtitle: "Open source and personal projects",
  },
};

export const WithoutSubtitle: Story = {
  args: {
    title: "Skills",
  },
};

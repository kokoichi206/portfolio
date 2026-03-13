import type { Meta, StoryObj } from "@storybook/react";
import { SkillBadge } from "./SkillBadge";

const meta = {
  title: "Components/SkillBadge",
  component: SkillBadge,
  argTypes: {
    variant: {
      control: "radio",
      options: ["main", "sub", "default"],
    },
  },
} satisfies Meta<typeof SkillBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: { name: "Go", years: 4, variant: "main" },
};

export const Sub: Story = {
  args: { name: "Python", years: 3, variant: "sub" },
};

export const Default: Story = {
  args: { name: "Shell/Bash", variant: "default" },
};

export const WithoutYears: Story = {
  args: { name: "Next.js" },
};

export const AllVariants: StoryObj<typeof SkillBadge> = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <SkillBadge name="Go" years={4} variant="main" />
      <SkillBadge name="TypeScript" years={3} variant="main" />
      <SkillBadge name="Python" years={3} variant="sub" />
      <SkillBadge name="Kotlin" years={2} variant="sub" />
      <SkillBadge name="Next.js" />
      <SkillBadge name="React" />
    </div>
  ),
};

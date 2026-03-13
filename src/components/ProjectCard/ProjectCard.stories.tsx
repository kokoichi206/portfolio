import type { Meta, StoryObj } from "@storybook/react";
import { ProjectCard } from "./ProjectCard";

const meta = {
  title: "Components/ProjectCard",
  component: ProjectCard,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 480 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    project: {
      name: "koto",
      description: "A fast, minimal TUI todo manager written in Rust",
      tech: ["Rust", "TUI"],
      github: "https://github.com/kokoichi206/koto",
      tier: 1,
    },
  },
};

export const ManyTags: Story = {
  args: {
    project: {
      name: "portfolio",
      description: "Personal portfolio site with bento grid layout and dark mode",
      tech: ["Astro", "React", "TypeScript", "Tailwind CSS", "Vercel", "Storybook"],
      github: "https://github.com/kokoichi206/portfolio",
      tier: 1,
    },
  },
};

export const LongDescription: Story = {
  args: {
    project: {
      name: "envmarker",
      description:
        "A browser extension that visually distinguishes between development, staging, and production environments by adding a colored marker to the page.",
      tech: ["TypeScript", "Chrome Extension"],
      github: "https://github.com/kokoichi206/envmarker",
      tier: 2,
    },
  },
};

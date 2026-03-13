import type { Meta, StoryObj } from "@storybook/react";
import { CertBadge } from "./CertBadge";

const meta = {
  title: "Components/CertBadge",
  component: CertBadge,
} satisfies Meta<typeof CertBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Short: Story = {
  args: {
    cert: { name: "AWS Solutions Architect Associate", abbr: "SAA", date: "2021-06" },
  },
};

export const Long: Story = {
  args: {
    cert: { name: "Google Cloud Professional Cloud Architect", abbr: "GCP PCA", date: "2024-12" },
  },
};

export const AbbrTruncated: Story = {
  args: {
    cert: { name: "ネットワークスペシャリスト", abbr: "NW specialist", date: "2023-12" },
  },
};

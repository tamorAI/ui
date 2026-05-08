import type { Meta, StoryObj } from "@storybook/react";
import { Calendar } from "@tamor/ui/components/calendar";

const meta: Meta<typeof Calendar> = {
  title: "Components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {
    mode: "single",
    selected: new Date(),
  },
};

export const Multiple: Story = {
  args: {
    mode: "multiple",
    selected: [
      new Date(),
      new Date(Date.now() + 86400000 * 2),
      new Date(Date.now() + 86400000 * 4),
    ],
  },
};

export const Range: Story = {
  args: {
    mode: "range",
    selected: {
      from: new Date(),
      to: new Date(Date.now() + 86400000 * 6),
    },
  },
};

export const WithoutOutsideDays: Story = {
  args: {
    mode: "single",
    showOutsideDays: false,
    selected: new Date(),
  },
};
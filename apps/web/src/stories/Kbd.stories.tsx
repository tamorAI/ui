import type { Meta, StoryObj } from "@storybook/react";
import { Kbd, KbdGroup } from "@tamor/ui/components/kbd";

const meta: Meta<typeof Kbd> = {
  title: "Components/Kbd",
  component: Kbd,
  subcomponents: { KbdGroup },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  args: {
    children: "Ctrl",
  },
};

export const Modifiers: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>Ctrl</Kbd>
      <Kbd>+</Kbd>
      <Kbd>C</Kbd>
    </KbdGroup>
  ),
};

export const Sequence: Story = {
  render: () => (
    <KbdGroup>
      <Kbd>Shift</Kbd>
      <Kbd>+</Kbd>
      <Kbd>Tab</Kbd>
    </KbdGroup>
  ),
};

export const InTooltip: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <span className="text-sm">Press</span>
      <Kbd>⌘</Kbd>
      <span className="text-sm">to copy</span>
    </div>
  ),
};
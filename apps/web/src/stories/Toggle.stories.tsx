import type { Meta, StoryObj } from "@storybook/react";
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";
import { Toggle, toggleVariants } from "@tamor/ui/components/toggle";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  args: {
    children: "Toggle",
    defaultPressed: false,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Toggle variant="default">Default</Toggle>
      <Toggle variant="outline">Outline</Toggle>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Toggle size="sm">Small</Toggle>
      <Toggle size="default">Default</Toggle>
      <Toggle size="lg">Large</Toggle>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Toggle defaultPressed aria-label="Bold">
        <BoldIcon className="size-4" />
      </Toggle>
      <Toggle aria-label="Italic">
        <ItalicIcon className="size-4" />
      </Toggle>
      <Toggle aria-label="Underline">
        <UnderlineIcon className="size-4" />
      </Toggle>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex gap-4">
      <Toggle disabled>Disabled</Toggle>
      <Toggle defaultPressed disabled>
        Disabled (On)
      </Toggle>
    </div>
  ),
};
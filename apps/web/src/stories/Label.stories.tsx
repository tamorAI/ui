import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "@tamor/ui/components/label";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: "Label",
    htmlFor: "input-id",
  },
};

export const Required: Story = {
  args: {
    children: "Required Field",
    htmlFor: "required-input",
  },
  render: () => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="required-input">
        Required Field <span className="text-destructive">*</span>
      </Label>
      <input id="required-input" className="h-8 rounded border border-input px-2" />
    </div>
  ),
};
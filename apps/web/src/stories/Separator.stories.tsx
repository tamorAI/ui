import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "@tamor/ui/components/separator";

const meta: Meta<typeof Separator> = {
  title: "Components/Separator",
  component: Separator,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  args: {},
};

export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-24 items-center gap-4">
      <span>Before</span>
      <Separator orientation="vertical" />
      <span>After</span>
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <div className="w-64 rounded-lg border p-4">
      <div className="mb-4">
        <h3 className="font-medium">Section 1</h3>
        <p className="text-sm text-muted-foreground">
          This is the first section content.
        </p>
      </div>
      <Separator className="my-4" />
      <div>
        <h3 className="font-medium">Section 2</h3>
        <p className="text-sm text-muted-foreground">
          This is the second section content.
        </p>
      </div>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="h-4 w-4 rounded bg-primary" />
        <span>Primary Item</span>
      </div>
      <Separator />
      <div className="flex items-center gap-4">
        <div className="h-4 w-4 rounded bg-secondary" />
        <span>Secondary Item</span>
      </div>
      <Separator />
      <div className="flex items-center gap-4">
        <div className="h-4 w-4 rounded bg-muted" />
        <span>Muted Item</span>
      </div>
    </div>
  ),
};
import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea, ScrollBar } from "@tamor/ui/components/scroll-area";

const meta: Meta<typeof ScrollArea> = {
  title: "Components/ScrollArea",
  component: ScrollArea,
  subcomponents: { ScrollBar },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-48 w-64 rounded-lg border p-4">
      <div className="space-y-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i} className="text-sm">
            Item {i + 1} - Scroll area content that is longer than the container height.
          </p>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="h-32 w-64 rounded-lg border p-4">
      <div className="flex gap-4">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="h-16 w-32 shrink-0 rounded-lg bg-muted p-2"
          >
            Item {i + 1}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};

export const Both: Story = {
  render: () => (
    <ScrollArea className="h-48 w-72 rounded-lg border p-4">
      <div className="flex flex-col gap-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="flex gap-4">
            {Array.from({ length: 10 }).map((_, j) => (
              <div
                key={j}
                className="h-12 w-32 shrink-0 rounded-lg bg-muted p-2 text-sm"
              >
                Item {i + 1}-{j + 1}
              </div>
            ))}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  ),
};
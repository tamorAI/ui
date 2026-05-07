import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "@tamor/ui/components/skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    className: "h-4 w-32",
  },
};

export const Card: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-3 rounded-lg border p-4">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  ),
};

export const Avatar: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Skeleton className="size-10 rounded-full" />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-3 w-32" />
      </div>
    </div>
  ),
};

export const Table: Story = {
  render: () => (
    <div className="flex w-80 flex-col gap-2 rounded-lg border p-4">
      <Skeleton className="h-6 w-full" />
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} className="h-8 w-full" />
      ))}
    </div>
  ),
};

export const Media: Story = {
  render: () => (
    <div className="w-64 rounded-lg border">
      <Skeleton className="aspect-video w-full rounded-t-lg" />
      <div className="flex gap-3 p-4">
        <Skeleton className="size-10 rounded-full" />
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-32" />
        </div>
      </div>
    </div>
  ),
};
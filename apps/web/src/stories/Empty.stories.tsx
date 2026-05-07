import type { Meta, StoryObj } from "@storybook/react";
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
} from "@tamor/ui/components/empty";
import { InboxIcon } from "lucide-react";

const meta: Meta<typeof Empty> = {
  title: "Components/Empty",
  component: Empty,
  subcomponents: {
    EmptyHeader,
    EmptyTitle,
    EmptyDescription,
    EmptyContent,
    EmptyMedia,
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Empty>;

export const Default: Story = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <InboxIcon className="size-4" />
        </EmptyMedia>
        <EmptyTitle>No items found</EmptyTitle>
        <EmptyDescription>
          Get started by creating your first item.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <button className="rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground">
          Create Item
        </button>
      </EmptyContent>
    </Empty>
  ),
};

export const Simple: Story = {
  render: () => (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>Empty state</EmptyTitle>
        <EmptyDescription>
          There is nothing here yet.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Empty>
      <EmptyMedia variant="icon">
        <InboxIcon className="size-4" />
      </EmptyMedia>
      <EmptyHeader>
        <EmptyTitle>Your inbox is empty</EmptyTitle>
        <EmptyDescription>
          When you receive messages, they will appear here.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  ),
};
import type { Meta, StoryObj } from "@storybook/react";
import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
} from "@tamor/ui/components/input-group";
import { SearchIcon, AtSignIcon, DollarSignIcon } from "lucide-react";

const meta: Meta<typeof InputGroup> = {
  title: "Components/InputGroup",
  component: InputGroup,
  subcomponents: {
    InputGroupInput,
    InputGroupAddon,
    InputGroupButton,
    InputGroupText,
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const Default: Story = {
  render: () => (
    <InputGroup>
      <InputGroupInput placeholder="Default input group" />
    </InputGroup>
  ),
};

export const WithPrefix: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon>
        <SearchIcon className="size-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search..." />
    </InputGroup>
  ),
};

export const WithSuffix: Story = {
  render: () => (
    <InputGroup>
      <InputGroupInput placeholder="Amount" />
      <InputGroupAddon align="inline-end">
        <span className="text-muted-foreground">USD</span>
      </InputGroupAddon>
    </InputGroup>
  ),
};

export const WithBoth: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon>
        <SearchIcon className="size-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search users..." />
      <InputGroupButton variant="ghost" size="icon-xs">
        ⚡
      </InputGroupButton>
    </InputGroup>
  ),
};

export const WithMultipleAddons: Story = {
  render: () => (
    <InputGroup>
      <InputGroupAddon align="inline-start">
        <AtSignIcon className="size-4" />
      </InputGroupAddon>
      <InputGroupInput placeholder="username" />
      <InputGroupAddon align="inline-end">
        <DollarSignIcon className="size-4" />
      </InputGroupAddon>
    </InputGroup>
  ),
};
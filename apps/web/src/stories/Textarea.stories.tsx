import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "@tamor/ui/components/textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: "Enter your message here...",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled textarea",
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    placeholder: "Invalid textarea",
    "aria-invalid": true,
  },
};

export const WithValue: Story = {
  args: {
    defaultValue:
      "This is some pre-filled content in the textarea. It can span multiple lines and the user can edit it.",
  },
};
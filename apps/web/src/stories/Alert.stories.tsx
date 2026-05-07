import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertTitle, AlertDescription } from "@tamor/ui/components/alert";
import { AlertCircleIcon } from "lucide-react";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  subcomponents: { AlertTitle, AlertDescription },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    children: (
      <>
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>
          This is an alert message with some description text.
        </AlertDescription>
      </>
    ),
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <AlertCircleIcon />
        <AlertTitle>Alert with Icon</AlertTitle>
        <AlertDescription>
          This alert has an icon before the title.
        </AlertDescription>
      </>
    ),
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: (
      <>
        <AlertCircleIcon />
        <AlertTitle>Destructive Alert</AlertTitle>
        <AlertDescription>
          This is a destructive alert for critical messages.
        </AlertDescription>
      </>
    ),
  },
};
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Progress,
  ProgressTrack,
  ProgressIndicator,
  ProgressLabel,
  ProgressValue,
} from "@tamor/ui/components/progress";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  subcomponents: { ProgressTrack, ProgressIndicator, ProgressLabel, ProgressValue },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  render: () => (
    <Progress value={50}>
      <ProgressIndicator />
    </Progress>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <Progress value={75}>
      <ProgressLabel>Uploading...</ProgressLabel>
      <ProgressTrack>
        <ProgressIndicator />
      </ProgressTrack>
      <ProgressValue />
    </Progress>
  ),
};

export const Dynamic: Story = {
  render: () => {
    const [value, setValue] = useState(25);
    return (
      <div className="flex flex-col gap-4">
        <Progress value={value}>
          <ProgressLabel>Upload Progress</ProgressLabel>
          <ProgressTrack>
            <ProgressIndicator />
          </ProgressTrack>
          <ProgressValue />
        </Progress>
        <div className="flex gap-2">
          <button
            className="rounded bg-primary px-3 py-1 text-sm text-primary-foreground"
            onClick={() => setValue(Math.max(0, value - 10))}
          >
            -10%
          </button>
          <button
            className="rounded bg-primary px-3 py-1 text-sm text-primary-foreground"
            onClick={() => setValue(Math.min(100, value + 10))}
          >
            +10%
          </button>
        </div>
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Progress value={100}>
        <ProgressLabel>Complete</ProgressLabel>
        <ProgressTrack>
          <ProgressIndicator className="bg-primary" />
        </ProgressTrack>
      </Progress>
      <Progress value={65}>
        <ProgressLabel>Processing</ProgressLabel>
        <ProgressTrack>
          <ProgressIndicator className="bg-secondary" />
        </ProgressTrack>
      </Progress>
      <Progress value={30}>
        <ProgressLabel>Pending</ProgressLabel>
        <ProgressTrack>
          <ProgressIndicator className="bg-muted-foreground" />
        </ProgressTrack>
      </Progress>
    </div>
  ),
};
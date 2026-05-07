import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Slider } from "@tamor/ui/components/slider";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    defaultValue: [50],
  },
};

export const WithRange: Story = {
  args: {
    defaultValue: [25, 75],
  },
};

export const MinMax: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-4">
      <label className="text-sm">Volume (0-100)</label>
      <Slider defaultValue={[50]} min={0} max={100} />
    </div>
  ),
};

export const Dynamic: Story = {
  render: () => {
    const [value, setValue] = useState<number[]>([40]);
    return (
      <div className="flex w-64 flex-col gap-4">
        <div className="flex justify-between text-sm">
          <span>Value: {value[0]}</span>
          <span>{value[0]}%</span>
        </div>
        <Slider value={value} onValueChange={setValue} min={0} max={100} />
        <div className="flex gap-2">
          <button
            className="rounded bg-primary px-3 py-1 text-sm text-primary-foreground"
            onClick={() => setValue([Math.max(0, value[0] - 10)])}
          >
            -10
          </button>
          <button
            className="rounded bg-primary px-3 py-1 text-sm text-primary-foreground"
            onClick={() => setValue([Math.min(100, value[0] + 10)])}
          >
            +10
          </button>
        </div>
      </div>
    );
  },
};

export const Range: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-4">
      <label className="text-sm">Price Range ($0 - $500)</label>
      <Slider defaultValue={[100, 400]} min={0} max={500} />
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-48 items-center gap-4">
      <Slider defaultValue={[30]} orientation="vertical" min={0} max={100} />
      <Slider defaultValue={[50]} orientation="vertical" min={0} max={100} />
      <Slider defaultValue={[70]} orientation="vertical" min={0} max={100} />
    </div>
  ),
};
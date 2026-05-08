import type { Meta, StoryObj } from "@storybook/react";
import { Radio, RadioGroup } from "@tamor/ui/components/radio-group";
import { Label } from "@tamor/ui/components/label";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="apple">
      <Label>
        <Radio value="apple" />
        Apple
      </Label>
      <Label>
        <Radio value="banana" />
        Banana
      </Label>
      <Label>
        <Radio value="cherry" />
        Cherry
      </Label>
    </RadioGroup>
  ),
  args: {
    defaultValue: "apple",
  },
};

export const WithDisabled: Story = {
  render: () => (
    <RadioGroup defaultValue="apple">
      <Label>
        <Radio value="apple" />
        Apple
      </Label>
      <Label>
        <Radio value="banana" disabled />
        Banana
      </Label>
      <Label>
        <Radio value="cherry" />
        Cherry
      </Label>
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup defaultValue="apple" className="flex-row gap-4">
      <Label>
        <Radio value="apple" />
        Apple
      </Label>
      <Label>
        <Radio value="banana" />
        Banana
      </Label>
      <Label>
        <Radio value="cherry" />
        Cherry
      </Label>
    </RadioGroup>
  ),
};

export const FormExample: Story = {
  render: () => (
    <form className="space-y-4">
      <RadioGroup defaultValue="option-1">
        <Label>
          <Radio value="option-1" />
          Option 1
        </Label>
        <Label>
          <Radio value="option-2" />
          Option 2
        </Label>
        <Label>
          <Radio value="option-3" />
          Option 3
        </Label>
      </RadioGroup>
    </form>
  ),
};
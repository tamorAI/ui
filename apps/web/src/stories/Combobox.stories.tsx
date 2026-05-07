import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
} from "@tamor/ui/components/combobox";

const meta: Meta<typeof Combobox> = {
  title: "Components/Combobox",
  component: Combobox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Combobox>;

const FRUITS = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "blueberry", label: "Blueberry" },
  { value: "grapes", label: "Grapes" },
  { value: "orange", label: "Orange" },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<string>("");
    return (
      <Combobox
        value={value}
        onValueChange={setValue}
      >
        <ComboboxInput placeholder="Search fruits..." />
        <ComboboxContent>
          <ComboboxList>
            {FRUITS.map((fruit) => (
              <ComboboxItem key={fruit.value} value={fruit.value}>
                {fruit.label}
              </ComboboxItem>
            ))}
          </ComboboxList>
          <ComboboxEmpty>No fruits found.</ComboboxEmpty>
        </ComboboxContent>
      </Combobox>
    );
  },
};

export const Multiple: Story = {
  render: () => {
    const [values, setValues] = useState<string[]>([]);
    return (
      <Combobox
        multiple
        value={values}
        onValueChange={setValues}
      >
        <ComboboxInput placeholder="Select multiple fruits..." />
        <ComboboxContent>
          <ComboboxList>
            {FRUITS.map((fruit) => (
              <ComboboxItem key={fruit.value} value={fruit.value}>
                {fruit.label}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    );
  },
};
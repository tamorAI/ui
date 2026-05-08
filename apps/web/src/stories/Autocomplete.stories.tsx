import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Autocomplete,
  AutocompleteInput,
  AutocompletePopup,
  AutocompleteItem,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteSeparator,
  AutocompleteEmpty,
  AutocompleteClear,
  useAutocompleteFilter,
} from "@tamor/ui/components/autocomplete";

const meta: Meta<typeof Autocomplete> = {
  title: "Components/Autocomplete",
  component: Autocomplete,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

const FRUITS = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "blueberry", label: "Blueberry" },
  { value: "grapes", label: "Grapes" },
  { value: "orange", label: "Orange" },
];

const VEGETABLES = [
  { value: "carrot", label: "Carrot" },
  { value: "broccoli", label: "Broccoli" },
  { value: "spinach", label: "Spinach" },
];

const PROGRAMMING_LANGUAGES = [
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "python", label: "Python" },
  { value: "rust", label: "Rust" },
  { value: "go", label: "Go" },
  { value: "java", label: "Java" },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Autocomplete value={value} onValueChange={setValue}>
        <AutocompleteInput placeholder="Select a fruit..." />
        <AutocompletePopup>
          <AutocompleteItemCollection
            items={FRUITS}
            filter={value}
            onSelect={setValue}
          />
        </AutocompletePopup>
      </Autocomplete>
    );
  },
};

export const WithGroups: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Autocomplete value={value} onValueChange={setValue}>
        <AutocompleteInput placeholder="Select an option..." />
        <AutocompletePopup>
          <AutocompleteItemCollection
            items={FRUITS}
            filter={value}
            onSelect={setValue}
          />
          <AutocompleteSeparator />
          <AutocompleteItemCollection
            items={VEGETABLES}
            filter={value}
            onSelect={setValue}
          />
        </AutocompletePopup>
      </Autocomplete>
    );
  },
};

export const WithFiltering: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Autocomplete value={value} onValueChange={setValue}>
        <AutocompleteInput placeholder="Filter languages..." />
        <AutocompletePopup>
          <FilteredCollection
            items={PROGRAMMING_LANGUAGES}
            filter={value}
            onSelect={setValue}
          />
        </AutocompletePopup>
      </Autocomplete>
    );
  },
};

export const WithClearButton: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Autocomplete value={value} onValueChange={setValue}>
        <AutocompleteInput
          showClear
          placeholder="Select a fruit..."
        />
        <AutocompletePopup>
          <AutocompleteItemCollection
            items={FRUITS}
            filter={value}
            onSelect={setValue}
          />
        </AutocompletePopup>
      </Autocomplete>
    );
  },
};

export const SmallSize: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Autocomplete value={value} onValueChange={setValue}>
        <AutocompleteInput
          size="sm"
          placeholder="Small..."
        />
        <AutocompletePopup>
          <AutocompleteItemCollection
            items={FRUITS}
            filter={value}
            onSelect={setValue}
          />
        </AutocompletePopup>
      </Autocomplete>
    );
  },
};

export const LargeSize: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Autocomplete value={value} onValueChange={setValue}>
        <AutocompleteInput
          size="lg"
          placeholder="Large..."
        />
        <AutocompletePopup>
          <AutocompleteItemCollection
            items={FRUITS}
            filter={value}
            onSelect={setValue}
          />
        </AutocompletePopup>
      </Autocomplete>
    );
  },
};

export const NoResults: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <Autocomplete value={value} onValueChange={setValue}>
        <AutocompleteInput placeholder="Search for something..." />
        <AutocompletePopup>
          <FilteredCollection
            items={FRUITS}
            filter={value}
            onSelect={setValue}
          />
          <AutocompleteEmpty>No results found.</AutocompleteEmpty>
        </AutocompletePopup>
      </Autocomplete>
    );
  },
};

function AutocompleteItemCollection({
  items,
  filter,
  onSelect,
}: {
  items: { value: string; label: string }[];
  filter: string;
  onSelect: (value: string) => void;
}) {
  return (
    <>
      {items.map((item) => (
        <AutocompleteItem
          key={item.value}
          value={item.value}
          onClick={() => onSelect(item.value)}
        >
          {item.label}
        </AutocompleteItem>
      ))}
    </>
  );
}

function FilteredCollection({
  items,
  filter,
  onSelect,
}: {
  items: { value: string; label: string }[];
  filter: string;
  onSelect: (value: string) => void;
}) {
  const filtered = items.filter((item) =>
    item.label.toLowerCase().includes(filter.toLowerCase()),
  );

  if (filtered.length === 0) {
    return <AutocompleteEmpty>No results found.</AutocompleteEmpty>;
  }

  return (
    <>
      {filtered.map((item) => (
        <AutocompleteItem
          key={item.value}
          value={item.value}
          onClick={() => onSelect(item.value)}
        >
          {item.label}
        </AutocompleteItem>
      ))}
    </>
  );
}
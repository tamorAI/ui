import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { BoldIcon, ItalicIcon, UnderlineIcon, LinkIcon, ImageIcon, AlignLeftIcon, AlignCenterIcon, AlignRightIcon } from "lucide-react";
import {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarInput,
} from "@tamor/ui/components/toolbar";

const meta: Meta<typeof Toolbar> = {
  title: "Components/Toolbar",
  component: Toolbar,
  subcomponents: {
    ToolbarButton,
    ToolbarGroup,
    ToolbarSeparator,
    ToolbarInput,
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Toolbar>;

export const Default: Story = {
  render: () => {
    const [bold, setBold] = useState(false);
    const [italic, setItalic] = useState(false);
    const [underline, setUnderline] = useState(false);
    return (
      <Toolbar>
        <ToolbarGroup>
          <ToolbarButton
            pressed={bold}
            onClick={() => setBold(!bold)}
            aria-label="Bold"
          >
            <BoldIcon className="size-4" />
          </ToolbarButton>
          <ToolbarButton
            pressed={italic}
            onClick={() => setItalic(!italic)}
            aria-label="Italic"
          >
            <ItalicIcon className="size-4" />
          </ToolbarButton>
          <ToolbarButton
            pressed={underline}
            onClick={() => setUnderline(!underline)}
            aria-label="Underline"
          >
            <UnderlineIcon className="size-4" />
          </ToolbarButton>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarGroup>
          <ToolbarButton aria-label="Insert link">
            <LinkIcon className="size-4" />
          </ToolbarButton>
          <ToolbarButton aria-label="Insert image">
            <ImageIcon className="size-4" />
          </ToolbarButton>
        </ToolbarGroup>
      </Toolbar>
    );
  },
};

export const TextFormatting: Story = {
  render: () => (
    <Toolbar>
      <ToolbarGroup>
        <ToolbarButton aria-label="Bold">
          <BoldIcon className="size-4" />
        </ToolbarButton>
        <ToolbarButton aria-label="Italic">
          <ItalicIcon className="size-4" />
        </ToolbarButton>
        <ToolbarButton aria-label="Underline">
          <UnderlineIcon className="size-4" />
        </ToolbarButton>
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarGroup>
        <ToolbarButton aria-label="Align left">
          <AlignLeftIcon className="size-4" />
        </ToolbarButton>
        <ToolbarButton aria-label="Align center">
          <AlignCenterIcon className="size-4" />
        </ToolbarButton>
        <ToolbarButton aria-label="Align right">
          <AlignRightIcon className="size-4" />
        </ToolbarButton>
      </ToolbarGroup>
    </Toolbar>
  ),
};

export const WithInput: Story = {
  render: () => (
    <Toolbar>
      <ToolbarGroup>
        <ToolbarButton aria-label="Bold">
          <BoldIcon className="size-4" />
        </ToolbarButton>
        <ToolbarButton aria-label="Italic">
          <ItalicIcon className="size-4" />
        </ToolbarButton>
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarInput placeholder="Search..." className="h-7 w-32" />
    </Toolbar>
  ),
};

export const MultipleGroups: Story = {
  render: () => (
    <Toolbar>
      <ToolbarGroup>
        <ToolbarButton aria-label="Bold">
          <BoldIcon className="size-4" />
        </ToolbarButton>
        <ToolbarButton aria-label="Italic">
          <ItalicIcon className="size-4" />
        </ToolbarButton>
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarGroup>
        <ToolbarButton aria-label="Align left">
          <AlignLeftIcon className="size-4" />
        </ToolbarButton>
        <ToolbarButton aria-label="Align center">
          <AlignCenterIcon className="size-4" />
        </ToolbarButton>
        <ToolbarButton aria-label="Align right">
          <AlignRightIcon className="size-4" />
        </ToolbarButton>
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarGroup>
        <ToolbarButton aria-label="Link">
          <LinkIcon className="size-4" />
        </ToolbarButton>
      </ToolbarGroup>
    </Toolbar>
  ),
};

export const Compact: Story = {
  render: () => (
    <Toolbar className="p-0.5">
      <ToolbarGroup>
        <ToolbarButton className="h-7 w-7 rounded-sm" aria-label="Bold">
          <BoldIcon className="size-3.5" />
        </ToolbarButton>
        <ToolbarButton className="h-7 w-7 rounded-sm" aria-label="Italic">
          <ItalicIcon className="size-3.5" />
        </ToolbarButton>
        <ToolbarButton className="h-7 w-7 rounded-sm" aria-label="Underline">
          <UnderlineIcon className="size-3.5" />
        </ToolbarButton>
      </ToolbarGroup>
    </Toolbar>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Toolbar orientation="vertical">
      <ToolbarGroup orientation="vertical">
        <ToolbarButton aria-label="Bold">
          <BoldIcon className="size-4" />
        </ToolbarButton>
        <ToolbarButton aria-label="Italic">
          <ItalicIcon className="size-4" />
        </ToolbarButton>
        <ToolbarButton aria-label="Underline">
          <UnderlineIcon className="size-4" />
        </ToolbarButton>
      </ToolbarGroup>
      <ToolbarSeparator orientation="vertical" />
      <ToolbarGroup orientation="vertical">
        <ToolbarButton aria-label="Align left">
          <AlignLeftIcon className="size-4" />
        </ToolbarButton>
        <ToolbarButton aria-label="Align center">
          <AlignCenterIcon className="size-4" />
        </ToolbarButton>
      </ToolbarGroup>
    </Toolbar>
  ),
};
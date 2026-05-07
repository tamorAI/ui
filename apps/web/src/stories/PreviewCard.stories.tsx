import type { Meta, StoryObj } from "@storybook/react";
import {
  PreviewCard,
  PreviewCardTrigger,
  PreviewCardPopup,
} from "@tamor/ui/components/preview-card";

const meta: Meta<typeof PreviewCard> = {
  title: "Components/PreviewCard",
  component: PreviewCard,
  subcomponents: { PreviewCardTrigger, PreviewCardPopup },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PreviewCard>;

export const Default: Story = {
  render: () => (
    <PreviewCard>
      <PreviewCardTrigger asChild>
        <button className="rounded-lg border bg-card p-4 text-left hover:bg-muted/50">
          <div className="font-medium">Hover me</div>
          <div className="text-sm text-muted-foreground">
            See what happens when you hover
          </div>
        </button>
      </PreviewCardTrigger>
      <PreviewCardPopup>
        <div className="flex flex-col gap-1">
          <div className="font-medium">Preview Card</div>
          <p className="text-sm text-muted-foreground">
            This card appears on hover with a smooth animation.
          </p>
        </div>
      </PreviewCardPopup>
    </PreviewCard>
  ),
};

export const WithImage: Story = {
  render: () => (
    <PreviewCard>
      <PreviewCardTrigger asChild>
        <div className="w-48 overflow-hidden rounded-lg border bg-card cursor-pointer hover:opacity-80 transition-opacity">
          <img
            src="https://images.unsplash.com/photo-1554826285-7b2d3d5b4e24?w=400"
            alt="Preview"
            className="aspect-video w-full object-cover"
          />
          <div className="p-3">
            <div className="font-medium">Mountain Landscape</div>
          </div>
        </div>
      </PreviewCardTrigger>
      <PreviewCardPopup>
        <div className="space-y-2">
          <img
            src="https://images.unsplash.com/photo-1554826285-7b2d3d5b4e24?w=600"
            alt="Preview"
            className="rounded-md w-full aspect-video object-cover"
          />
          <div>
            <div className="font-medium">Mountain Landscape</div>
            <p className="text-sm text-muted-foreground">
              A beautiful mountain view at sunset.
            </p>
          </div>
        </div>
      </PreviewCardPopup>
    </PreviewCard>
  ),
};

export const AlignTop: Story = {
  render: () => (
    <PreviewCard>
      <PreviewCardTrigger asChild>
        <button className="rounded-lg border bg-card p-4 text-left hover:bg-muted/50">
          <div className="font-medium">Top aligned</div>
          <div className="text-sm text-muted-foreground">
            Card appears above
          </div>
        </button>
      </PreviewCardTrigger>
      <PreviewCardPopup align="center" sideOffset={8}>
        <div className="flex flex-col gap-1">
          <div className="font-medium">Top Preview</div>
          <p className="text-sm text-muted-foreground">
            This card is aligned to the top.
          </p>
        </div>
      </PreviewCardPopup>
    </PreviewCard>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div className="flex gap-4">
      <PreviewCard>
        <PreviewCardTrigger asChild>
          <button className="rounded-lg border bg-card p-4 text-left hover:bg-muted/50">
            <div className="font-medium">Card 1</div>
          </button>
        </PreviewCardTrigger>
        <PreviewCardPopup>
          <div className="font-medium">First Card</div>
        </PreviewCardPopup>
      </PreviewCard>
      <PreviewCard>
        <PreviewCardTrigger asChild>
          <button className="rounded-lg border bg-card p-4 text-left hover:bg-muted/50">
            <div className="font-medium">Card 2</div>
          </button>
        </PreviewCardTrigger>
        <PreviewCardPopup>
          <div className="font-medium">Second Card</div>
        </PreviewCardPopup>
      </PreviewCard>
      <PreviewCard>
        <PreviewCardTrigger asChild>
          <button className="rounded-lg border bg-card p-4 text-left hover:bg-muted/50">
            <div className="font-medium">Card 3</div>
          </button>
        </PreviewCardTrigger>
        <PreviewCardPopup>
          <div className="font-medium">Third Card</div>
        </PreviewCardPopup>
      </PreviewCard>
    </div>
  ),
};
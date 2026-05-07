import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "@tamor/ui/components/button";
import {
  Sheet,
  SheetTrigger,
  SheetPopup,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetPanel,
  SheetFooter,
} from "@tamor/ui/components/sheet";

const meta: Meta<typeof Sheet> = {
  title: "Components/Sheet",
  component: Sheet,
  subcomponents: {
    SheetTrigger,
    SheetPopup,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetPanel,
    SheetFooter,
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button>Open Sheet</Button>
          </SheetTrigger>
          <SheetPopup>
            <SheetHeader>
              <SheetTitle>Sheet Title</SheetTitle>
              <SheetDescription>
                This is a sheet description explaining what this sheet contains.
              </SheetDescription>
            </SheetHeader>
            <SheetPanel>
              <p className="text-sm text-muted-foreground">
                Sheet content goes here. You can put any content in this panel.
              </p>
            </SheetPanel>
            <SheetFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Submit</Button>
            </SheetFooter>
          </SheetPopup>
        </Sheet>
      </>
    );
  },
};

export const Right: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button>Open Right Sheet</Button>
          </SheetTrigger>
          <SheetPopup side="right">
            <SheetHeader>
              <SheetTitle>Right Side Sheet</SheetTitle>
              <SheetDescription>
                This sheet slides in from the right side.
              </SheetDescription>
            </SheetHeader>
            <SheetPanel>
              <p className="text-sm text-muted-foreground">
                Content slides in from the right edge of the screen.
              </p>
            </SheetPanel>
          </SheetPopup>
        </Sheet>
      </>
    );
  },
};

export const Left: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button>Open Left Sheet</Button>
          </SheetTrigger>
          <SheetPopup side="left">
            <SheetHeader>
              <SheetTitle>Left Side Sheet</SheetTitle>
            </SheetHeader>
            <SheetPanel>
              <p className="text-sm text-muted-foreground">
                Content slides in from the left edge of the screen.
              </p>
            </SheetPanel>
          </SheetPopup>
        </Sheet>
      </>
    );
  },
};

export const Bottom: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button>Open Bottom Sheet</Button>
          </SheetTrigger>
          <SheetPopup side="bottom">
            <SheetHeader>
              <SheetTitle>Bottom Sheet</SheetTitle>
            </SheetHeader>
            <SheetPanel>
              <p className="text-sm text-muted-foreground">
                This sheet slides up from the bottom of the screen.
              </p>
            </SheetPanel>
            <SheetFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Close
              </Button>
            </SheetFooter>
          </SheetPopup>
        </Sheet>
      </>
    );
  },
};

export const Inset: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline">Open Inset Sheet</Button>
          </SheetTrigger>
          <SheetPopup variant="inset" side="right">
            <SheetHeader>
              <SheetTitle>Inset Sheet</SheetTitle>
              <SheetDescription>
                An inset sheet with more padding and rounded corners.
              </SheetDescription>
            </SheetHeader>
            <SheetPanel>
              <p className="text-sm text-muted-foreground">
                This variant has an inset style with more padding and rounded corners on larger screens.
              </p>
            </SheetPanel>
          </SheetPopup>
        </Sheet>
      </>
    );
  },
};

export const WithoutClose: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button>No Close Button</Button>
          </SheetTrigger>
          <SheetPopup showCloseButton={false}>
            <SheetHeader>
              <SheetTitle>No Close Button</SheetTitle>
            </SheetHeader>
            <SheetPanel>
              <p className="text-sm text-muted-foreground">
                This sheet does not have a close button. Use the backdrop to close it.
              </p>
            </SheetPanel>
          </SheetPopup>
        </Sheet>
      </>
    );
  },
};

export const BareFooter: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline">Bare Footer</Button>
          </SheetTrigger>
          <SheetPopup>
            <SheetHeader>
              <SheetTitle>Sheet with Bare Footer</SheetTitle>
            </SheetHeader>
            <SheetPanel>
              <p className="text-sm text-muted-foreground">
                The footer below has a bare style without a top border.
              </p>
            </SheetPanel>
            <SheetFooter variant="bare">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Save</Button>
            </SheetFooter>
          </SheetPopup>
        </Sheet>
      </>
    );
  },
};
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "@tamor/ui/components/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerPopup,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerPanel,
  DrawerFooter,
  DrawerMenu,
  DrawerMenuItem,
  DrawerMenuSeparator,
  DrawerMenuTrigger,
  DrawerMenuCheckboxItem,
  DrawerMenuGroup,
  DrawerMenuGroupLabel,
  DrawerBar,
} from "@tamor/ui/components/drawer";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  subcomponents: {
    DrawerTrigger,
    DrawerPopup,
    DrawerHeader,
    DrawerTitle,
    DrawerDescription,
    DrawerPanel,
    DrawerFooter,
    DrawerMenu,
    DrawerMenuItem,
    DrawerMenuSeparator,
    DrawerMenuTrigger,
    DrawerMenuCheckboxItem,
    DrawerMenuGroup,
    DrawerMenuGroupLabel,
    DrawerBar,
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button>Open Drawer</Button>
          </DrawerTrigger>
          <DrawerPopup>
            <DrawerHeader>
              <DrawerTitle>Drawer Title</DrawerTitle>
              <DrawerDescription>
                This is a drawer description explaining what this drawer contains.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerPanel>
              <p className="text-sm text-muted-foreground">
                Drawer content goes here. You can put any content in this panel.
              </p>
            </DrawerPanel>
            <DrawerFooter>
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Submit</Button>
            </DrawerFooter>
          </DrawerPopup>
        </Drawer>
      </>
    );
  },
};

export const Bottom: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Drawer open={open} onOpenChange={setOpen} position="bottom">
          <DrawerTrigger asChild>
            <Button>Open Bottom Drawer</Button>
          </DrawerTrigger>
          <DrawerPopup position="bottom" showBar>
            <DrawerHeader>
              <DrawerTitle>Bottom Drawer</DrawerTitle>
              <DrawerDescription>
                This drawer slides up from the bottom of the screen.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerPanel>
              <p className="text-sm text-muted-foreground">
                Content slides in from the bottom edge of the screen.
              </p>
            </DrawerPanel>
          </DrawerPopup>
        </Drawer>
      </>
    );
  },
};

export const Right: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Drawer open={open} onOpenChange={setOpen} position="right">
          <DrawerTrigger asChild>
            <Button>Open Right Drawer</Button>
          </DrawerTrigger>
          <DrawerPopup position="right">
            <DrawerHeader>
              <DrawerTitle>Right Drawer</DrawerTitle>
            </DrawerHeader>
            <DrawerPanel>
              <p className="text-sm text-muted-foreground">
                Content slides in from the right edge of the screen.
              </p>
            </DrawerPanel>
          </DrawerPopup>
        </Drawer>
      </>
    );
  },
};

export const Left: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Drawer open={open} onOpenChange={setOpen} position="left">
          <DrawerTrigger asChild>
            <Button>Open Left Drawer</Button>
          </DrawerTrigger>
          <DrawerPopup position="left">
            <DrawerHeader>
              <DrawerTitle>Left Drawer</DrawerTitle>
            </DrawerHeader>
            <DrawerPanel>
              <p className="text-sm text-muted-foreground">
                Content slides in from the left edge of the screen.
              </p>
            </DrawerPanel>
          </DrawerPopup>
        </Drawer>
      </>
    );
  },
};

export const Top: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Drawer open={open} onOpenChange={setOpen} position="top">
          <DrawerTrigger asChild>
            <Button>Open Top Drawer</Button>
          </DrawerTrigger>
          <DrawerPopup position="top">
            <DrawerHeader>
              <DrawerTitle>Top Drawer</DrawerTitle>
            </DrawerHeader>
            <DrawerPanel>
              <p className="text-sm text-muted-foreground">
                Content slides down from the top of the screen.
              </p>
            </DrawerPanel>
          </DrawerPopup>
        </Drawer>
      </>
    );
  },
};

export const WithMenu: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Drawer open={open} onOpenChange={setOpen} position="right">
          <DrawerTrigger asChild>
            <Button>Open Menu Drawer</Button>
          </DrawerTrigger>
          <DrawerPopup position="right">
            <DrawerMenu>
              <DrawerMenuItem onClick={() => setOpen(false)}>
                Home
              </DrawerMenuItem>
              <DrawerMenuItem onClick={() => setOpen(false)}>
                Profile
              </DrawerMenuItem>
              <DrawerMenuItem onClick={() => setOpen(false)}>
                Settings
              </DrawerMenuItem>
              <DrawerMenuSeparator />
              <DrawerMenuItem variant="destructive" onClick={() => setOpen(false)}>
                Log out
              </DrawerMenuItem>
            </DrawerMenu>
          </DrawerPopup>
        </Drawer>
      </>
    );
  },
};

export const WithGroups: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Drawer open={open} onOpenChange={setOpen} position="right">
          <DrawerTrigger asChild>
            <Button>Open Grouped Menu</Button>
          </DrawerTrigger>
          <DrawerPopup position="right">
            <DrawerMenu>
              <DrawerMenuGroup>
                <DrawerMenuGroupLabel>Main</DrawerMenuGroupLabel>
                <DrawerMenuItem onClick={() => setOpen(false)}>
                  Dashboard
                </DrawerMenuItem>
                <DrawerMenuItem onClick={() => setOpen(false)}>
                  Analytics
                </DrawerMenuItem>
              </DrawerMenuGroup>
              <DrawerMenuSeparator />
              <DrawerMenuGroup>
                <DrawerMenuGroupLabel>Settings</DrawerMenuGroupLabel>
                <DrawerMenuItem onClick={() => setOpen(false)}>
                  Profile
                </DrawerMenuItem>
                <DrawerMenuItem onClick={() => setOpen(false)}>
                  Preferences
                </DrawerMenuItem>
              </DrawerMenuGroup>
            </DrawerMenu>
          </DrawerPopup>
        </Drawer>
      </>
    );
  },
};

export const WithCheckbox: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    return (
      <>
        <Drawer open={open} onOpenChange={setOpen} position="right">
          <DrawerTrigger asChild>
            <Button>Open with Checkboxes</Button>
          </DrawerTrigger>
          <DrawerPopup position="right">
            <DrawerMenu>
              <DrawerMenuCheckboxItem
                checked={checked}
                onCheckedChange={setChecked}
              >
                Enable notifications
              </DrawerMenuCheckboxItem>
              <DrawerMenuCheckboxItem>Dark mode</DrawerMenuCheckboxItem>
              <DrawerMenuSeparator />
              <DrawerMenuCheckboxItem variant="switch">
                Auto-save
              </DrawerMenuCheckboxItem>
            </DrawerMenu>
          </DrawerPopup>
        </Drawer>
      </>
    );
  },
};

export const Inset: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Drawer open={open} onOpenChange={setOpen} position="right">
          <DrawerTrigger asChild>
            <Button variant="outline">Open Inset Drawer</Button>
          </DrawerTrigger>
          <DrawerPopup position="right" variant="inset">
            <DrawerHeader>
              <DrawerTitle>Inset Drawer</DrawerTitle>
              <DrawerDescription>
                An inset drawer with more padding and rounded corners.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerPanel>
              <p className="text-sm text-muted-foreground">
                This variant has an inset style with more padding and rounded corners on larger screens.
              </p>
            </DrawerPanel>
          </DrawerPopup>
        </Drawer>
      </>
    );
  },
};

export const WithoutCloseButton: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Drawer open={open} onOpenChange={setOpen} position="bottom">
          <DrawerTrigger asChild>
            <Button>No Close Button</Button>
          </DrawerTrigger>
          <DrawerPopup position="bottom" showCloseButton={false}>
            <DrawerHeader>
              <DrawerTitle>No Close Button</DrawerTitle>
            </DrawerHeader>
            <DrawerPanel>
              <p className="text-sm text-muted-foreground">
                This drawer does not have a close button. Swipe or use backdrop to close.
              </p>
            </DrawerPanel>
          </DrawerPopup>
        </Drawer>
      </>
    );
  },
};

export const BareFooter: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Drawer open={open} onOpenChange={setOpen} position="bottom">
          <DrawerTrigger asChild>
            <Button variant="outline">Bare Footer</Button>
          </DrawerTrigger>
          <DrawerPopup position="bottom">
            <DrawerHeader>
              <DrawerTitle>Drawer with Bare Footer</DrawerTitle>
            </DrawerHeader>
            <DrawerPanel>
              <p className="text-sm text-muted-foreground">
                The footer below has a bare style without a top border.
              </p>
            </DrawerPanel>
            <DrawerFooter variant="bare">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setOpen(false)}>Save</Button>
            </DrawerFooter>
          </DrawerPopup>
        </Drawer>
      </>
    );
  },
};
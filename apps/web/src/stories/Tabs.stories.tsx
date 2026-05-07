import type { Meta, StoryObj } from "@storybook/react";
import {
  Tabs,
  TabsList,
  TabsTab,
  TabsPanel,
} from "@tamor/ui/components/tabs";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  subcomponents: { TabsList, TabsTab, TabsPanel },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList aria-label="Manage your account">
        <TabsTab value="tab1">Account</TabsTab>
        <TabsTab value="tab2">Password</TabsTab>
        <TabsTab value="tab3">Settings</TabsTab>
      </TabsList>
      <TabsPanel value="tab1">
        <p className="text-sm text-muted-foreground">
          Make changes to your account here.
        </p>
      </TabsPanel>
      <TabsPanel value="tab2">
        <p className="text-sm text-muted-foreground">
          Change your password here.
        </p>
      </TabsPanel>
      <TabsPanel value="tab3">
        <p className="text-sm text-muted-foreground">
          Manage your settings here.
        </p>
      </TabsPanel>
    </Tabs>
  ),
};

export const Underline: Story = {
  render: () => (
    <Tabs defaultValue="overview">
      <TabsList variant="underline" aria-label="Navigation">
        <TabsTab value="overview">Overview</TabsTab>
        <TabsTab value="analytics">Analytics</TabsTab>
        <TabsTab value="reports">Reports</TabsTab>
        <TabsTab value="settings">Settings</TabsTab>
      </TabsList>
      <TabsPanel value="overview">
        <p className="text-sm text-muted-foreground">
          Overview content goes here.
        </p>
      </TabsPanel>
      <TabsPanel value="analytics">
        <p className="text-sm text-muted-foreground">
          Analytics content goes here.
        </p>
      </TabsPanel>
      <TabsPanel value="reports">
        <p className="text-sm text-muted-foreground">
          Reports content goes here.
        </p>
      </TabsPanel>
      <TabsPanel value="settings">
        <p className="text-sm text-muted-foreground">
          Settings content goes here.
        </p>
      </TabsPanel>
    </Tabs>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="overview" orientation="vertical">
      <TabsList variant="underline" aria-label="Vertical navigation">
        <TabsTab value="overview">Overview</TabsTab>
        <TabsTab value="analytics">Analytics</TabsTab>
        <TabsTab value="reports">Reports</TabsTab>
      </TabsList>
      <TabsPanel value="overview">
        <p className="text-sm text-muted-foreground">
          Vertical tabs with underline variant.
        </p>
      </TabsPanel>
      <TabsPanel value="analytics">
        <p className="text-sm text-muted-foreground">
          Analytics panel content.
        </p>
      </TabsPanel>
      <TabsPanel value="reports">
        <p className="text-sm text-muted-foreground">
          Reports panel content.
        </p>
      </TabsPanel>
    </Tabs>
  ),
};

export const VerticalDefault: Story = {
  render: () => (
    <Tabs defaultValue="account" orientation="vertical">
      <TabsList aria-label="Manage your account">
        <TabsTab value="account">Account</TabsTab>
        <TabsTab value="security">Security</TabsTab>
        <TabsTab value="notifications">Notifications</TabsTab>
      </TabsList>
      <TabsPanel value="account">
        <div className="space-y-2">
          <label className="text-sm font-medium">Name</label>
          <input className="h-8 w-48 rounded-lg border border-input px-2.5" defaultValue="John Doe" />
        </div>
      </TabsPanel>
      <TabsPanel value="security">
        <p className="text-sm text-muted-foreground">
          Security settings content.
        </p>
      </TabsPanel>
      <TabsPanel value="notifications">
        <p className="text-sm text-muted-foreground">
          Notification preferences.
        </p>
      </TabsPanel>
    </Tabs>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Tabs defaultValue="tab1">
      <TabsList aria-label="Manage your account">
        <TabsTab value="tab1">Active</TabsTab>
        <TabsTab value="tab2" disabled>
          Disabled
        </TabsTab>
        <TabsTab value="tab3">Available</TabsTab>
      </TabsList>
      <TabsPanel value="tab1">
        <p className="text-sm text-muted-foreground">
          Active tab content.
        </p>
      </TabsPanel>
      <TabsPanel value="tab3">
        <p className="text-sm text-muted-foreground">
          Available tab content.
        </p>
      </TabsPanel>
    </Tabs>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Tabs defaultValue="home">
      <TabsList aria-label="Navigation">
        <TabsTab value="home">
          <span>🏠</span> Home
        </TabsTab>
        <TabsTab value="profile">
          <span>👤</span> Profile
        </TabsTab>
        <TabsTab value="messages">
          <span>✉️</span> Messages
        </TabsTab>
        <TabsTab value="settings">
          <span>⚙️</span> Settings
        </TabsTab>
      </TabsList>
      <TabsPanel value="home">
        <p className="text-sm text-muted-foreground">Home page content.</p>
      </TabsPanel>
      <TabsPanel value="profile">
        <p className="text-sm text-muted-foreground">Profile content.</p>
      </TabsPanel>
      <TabsPanel value="messages">
        <p className="text-sm text-muted-foreground">Messages content.</p>
      </TabsPanel>
      <TabsPanel value="settings">
        <p className="text-sm text-muted-foreground">Settings content.</p>
      </TabsPanel>
    </Tabs>
  ),
};
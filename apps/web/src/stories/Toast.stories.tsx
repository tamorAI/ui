import type { Meta, StoryObj } from "@storybook/react";
import { useState, useEffect } from "react";
import { Button } from "@tamor/ui/components/button";
import { toastManager, ToastProvider, type ToastPosition } from "@tamor/ui/components/toast";

const meta: Meta<typeof ToastProvider> = {
  title: "Components/Toast",
  component: ToastProvider,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ToastProvider>;

const ToastDemo = ({ position }: { position: ToastPosition }) => {
  const [toasts, setToasts] = useState<
    Array<{
      id: number;
      type: "success" | "error" | "warning" | "info" | "loading";
      title: string;
      description?: string;
    }>
  >([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setToasts((prev) => {
        if (prev.length === 0) return prev;
        return prev.slice(1);
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-64 rounded-lg border p-4">
      <ToastProvider position={position}>
        <div className="mb-4 flex flex-wrap gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              const id = Date.now();
              setToasts((prev) => [
                ...prev,
                { id, type: "success", title: "Success!", description: "Your changes have been saved." },
              ]);
              toastManager.createToast({
                title: "Success!",
                description: "Your changes have been saved.",
                type: "success",
              });
            }}
          >
            Success
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              const id = Date.now();
              setToasts((prev) => [
                ...prev,
                { id, type: "error", title: "Error", description: "Something went wrong." },
              ]);
              toastManager.createToast({
                title: "Error",
                description: "Something went wrong.",
                type: "error",
              });
            }}
          >
            Error
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              const id = Date.now();
              setToasts((prev) => [
                ...prev,
                { id, type: "warning", title: "Warning", description: "Please review your settings." },
              ]);
              toastManager.createToast({
                title: "Warning",
                description: "Please review your settings.",
                type: "warning",
              });
            }}
          >
            Warning
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              const id = Date.now();
              setToasts((prev) => [
                ...prev,
                { id, type: "info", title: "Info", description: "Here is some information." },
              ]);
              toastManager.createToast({
                title: "Info",
                description: "Here is some information.",
                type: "info",
              });
            }}
          >
            Info
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              const id = Date.now();
              setToasts((prev) => [
                ...prev,
                { id, type: "loading", title: "Loading...", description: "Please wait while we process your request." },
              ]);
              toastManager.createToast({
                title: "Loading...",
                description: "Please wait while we process your request.",
                type: "loading",
              });
            }}
          >
            Loading
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Position: {position}
        </p>
      </ToastProvider>
    </div>
  );
};

export const Default: Story = {
  render: () => <ToastDemo position="bottom-right" />,
};

export const TopRight: Story = {
  render: () => <ToastDemo position="top-right" />,
};

export const TopLeft: Story = {
  render: () => <ToastDemo position="top-left" />,
};

export const TopCenter: Story = {
  render: () => <ToastDemo position="top-center" />,
};

export const BottomLeft: Story = {
  render: () => <ToastDemo position="bottom-left" />,
};

export const BottomCenter: Story = {
  render: () => <ToastDemo position="bottom-center" />,
};

export const BottomRight: Story = {
  render: () => <ToastDemo position="bottom-right" />,
};

const ToastTypesDemo = () => {
  return (
    <div className="flex flex-col gap-4 rounded-lg border p-4">
      <h3 className="font-medium">Toast Types</h3>
      <ToastProvider position="bottom-right">
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              toastManager.createToast({
                title: "Changes saved",
                description: "Your profile has been updated successfully.",
                type: "success",
              })
            }
          >
            Success Toast
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              toastManager.createToast({
                title: "Something went wrong",
                description: "Please try again later.",
                type: "error",
              })
            }
          >
            Error Toast
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              toastManager.createToast({
                title: "Unsaved changes",
                description: "You have unsaved changes that will be lost.",
                type: "warning",
              })
            }
          >
            Warning Toast
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              toastManager.createToast({
                title: "New update available",
                description: "Version 2.0 is now available.",
                type: "info",
              })
            }
          >
            Info Toast
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() =>
              toastManager.createToast({
                title: "Processing",
                description: "Please wait...",
                type: "loading",
              })
            }
          >
            Loading Toast
          </Button>
        </div>
      </ToastProvider>
    </div>
  );
};

export const AllTypes: Story = {
  render: () => <ToastTypesDemo />,
};

const ToastWithActionDemo = () => {
  return (
    <div className="flex flex-col gap-4 rounded-lg border p-4">
      <h3 className="font-medium">Toast with Action</h3>
      <ToastProvider position="bottom-right">
        <Button
          variant="outline"
          onClick={() =>
            toastManager.createToast({
              title: "File uploaded",
              description: "Your file has been uploaded successfully.",
              type: "success",
              actionProps: {
                children: "Undo",
                onClick: () => {
                  console.log("Undo clicked");
                },
              },
            })
          }
        >
          Show Toast with Action
        </Button>
      </ToastProvider>
    </div>
  );
};

export const WithAction: Story = {
  render: () => <ToastWithActionDemo />,
};

const ToastOnlyTitleDemo = () => {
  return (
    <div className="flex flex-col gap-4 rounded-lg border p-4">
      <h3 className="font-medium">Toast with Title Only</h3>
      <ToastProvider position="bottom-right">
        <Button
          variant="outline"
          onClick={() =>
            toastManager.createToast({
              title: "Operation completed",
              type: "success",
            })
          }
        >
          Show Toast (Title Only)
        </Button>
      </ToastProvider>
    </div>
  );
};

export const TitleOnly: Story = {
  render: () => <ToastOnlyTitleDemo />,
};
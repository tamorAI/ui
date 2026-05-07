import type { Meta, StoryObj } from "@storybook/react";
import {
  ChartContainer,
  ChartTooltipContent,
  ChartLegendContent,
} from "@tamor/ui/components/chart";
import { BarChart, Bar, XAxis, YAxis, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const meta: Meta<typeof ChartContainer> = {
  title: "Components/Chart",
  component: ChartContainer,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ChartContainer>;

const barData = [
  { month: "Jan", desktop: 186 },
  { month: "Feb", desktop: 305 },
  { month: "Mar", desktop: 237 },
  { month: "Apr", desktop: 173 },
  { month: "May", desktop: 209 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--primary))",
  },
} as const;

export const BarChartExample: Story = {
  render: () => (
    <ChartContainer config={chartConfig}>
      <BarChart data={barData}>
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={10}
        />
        <ChartTooltipContent />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
      </BarChart>
    </ChartContainer>
  ),
};

const lineData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
];

const lineConfig = {
  value: {
    label: "Value",
    color: "hsl(var(--primary))",
  },
} as const;

export const LineChartExample: Story = {
  render: () => (
    <ChartContainer config={lineConfig}>
      <LineChart data={lineData}>
        <XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={10} />
        <YAxis tickLine={false} axisLine={false} tickMargin={10} />
        <ChartTooltipContent />
        <ChartLegendContent />
        <Line type="monotone" dataKey="value" stroke="var(--color-value)" strokeWidth={2} dot={false} />
      </LineChart>
    </ChartContainer>
  ),
};

const pieData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
];

export const PieChartExample: Story = {
  render: () => (
    <ChartContainer config={{}}>
      <PieChart>
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {pieData.map((_, index) => (
            <Cell key={`cell-${index}`} fill={`hsl(var(--primary))`} />
          ))}
        </Pie>
        <ChartTooltipContent />
      </PieChart>
    </ChartContainer>
  ),
};
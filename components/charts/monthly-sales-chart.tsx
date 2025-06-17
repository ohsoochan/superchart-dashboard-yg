"use client"

import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart as RechartsLineChart, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

interface MonthlySalesChartProps {
  data: { month: string; sales: number }[]
}

export default function MonthlySalesChart({ data }: MonthlySalesChartProps) {
  return (
    <ChartContainer
      config={{
        sales: {
          label: "매출",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="aspect-square h-[250px]"
    >
      <RechartsLineChart
        data={data}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis
          tickFormatter={(value) => `${(value / 1000000).toFixed(0)}백만`}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <Tooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
        <Line dataKey="sales" type="monotone" stroke="var(--color-sales)" strokeWidth={2} dot={false} />
      </RechartsLineChart>
    </ChartContainer>
  )
}

"use client"

import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart as RechartsLineChart, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts"

interface BlogRankingChartProps {
  data: { month: string; probability: number }[]
}

export default function BlogRankingChart({ data }: BlogRankingChartProps) {
  return (
    <ChartContainer
      config={{
        probability: {
          label: "확률",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="min-h-[250px]"
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
          tickFormatter={(value) => `${(value * 100).toFixed(0)}%`}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <Tooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
        <Line dataKey="probability" type="monotone" stroke="var(--color-probability)" strokeWidth={2} dot={false} />
      </RechartsLineChart>
    </ChartContainer>
  )
}

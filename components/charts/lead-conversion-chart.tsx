"use client"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, XAxis, YAxis } from "recharts"

interface LeadConversionChartProps {
  data: { stage: string; value: number }[]
}

export default function LeadConversionChart({ data }: LeadConversionChartProps) {
  return (
    <ChartContainer
      config={{
        value: {
          label: "수",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="min-h-[250px]"
    >
      <BarChart
        accessibilityLayer
        data={data}
        layout="vertical"
        margin={{
          left: 0,
          right: 0,
        }}
      >
        <XAxis type="number" hide />
        <YAxis dataKey="stage" type="category" tickLine={false} tickMargin={10} axisLine={false} width={100} />
        <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
        <Bar dataKey="value" fill="var(--color-value)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}

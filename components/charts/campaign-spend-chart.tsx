"use client"

import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Legend } from "recharts"

interface CampaignSpendChartProps {
  data: {
    representative: string
    "1월": number
    "2월": number
    "3월": number
    "4월": number
    "5월": number
    "6월": number
  }[]
}

export default function CampaignSpendChart({ data }: CampaignSpendChartProps) {
  return (
    <ChartContainer
      config={{
        "1월": { label: "1월", color: "hsl(var(--chart-1))" },
        "2월": { label: "2월", color: "hsl(var(--chart-2))" },
        "3월": { label: "3월", color: "hsl(var(--chart-3))" },
        "4월": { label: "4월", color: "hsl(var(--chart-4))" },
        "5월": { label: "5월", color: "hsl(var(--chart-5))" },
        "6월": { label: "6월", color: "hsl(var(--chart-6))" },
      }}
      className="min-h-[300px] w-full"
    >
      <BarChart
        accessibilityLayer
        data={data}
        margin={{
          left: -10,
          right: 10,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="representative" tickLine={false} tickMargin={10} axisLine={false} />
        <YAxis
          tickFormatter={(value) => `${(value / 1000000).toFixed(0)}백만`}
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Legend />
        <Bar dataKey="1월" fill="var(--color-1월)" radius={4} />
        <Bar dataKey="2월" fill="var(--color-2월)" radius={4} />
        <Bar dataKey="3월" fill="var(--color-3월)" radius={4} />
        <Bar dataKey="4월" fill="var(--color-4월)" radius={4} />
        <Bar dataKey="5월" fill="var(--color-5월)" radius={4} />
        <Bar dataKey="6월" fill="var(--color-6월)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}

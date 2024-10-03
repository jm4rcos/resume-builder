"use client";

import { TrendingUp } from "lucide-react";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { UseFormReturn } from "react-hook-form";
import { ResumeFormData } from "@/interfaces";
import { getChartData } from "@/lib/get-chart-data";

export const description = "A radial chart with text";

// const chartData = [
//   { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
// ];

const chartConfig = {
  value: {
    label: "Completed",
    color: "hsl(var(--chart-1))",
  },
  fill: {
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function RadialChart({
  form,
}: {
  form: UseFormReturn<ResumeFormData>;
}) {
  const chartData = getChartData(form.getValues());

  return (
    <div>
      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square max-h-[250px]"
      >
        <RadialBarChart
          width={250}
          height={250}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={110}
          barSize={10}
          data={chartData}
        >
          <RadialBar dataKey="value" background cornerRadius={10} />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-title text-xl font-bold"
                      >
                        {getChartData(form.getValues())[0].name.toString()}
                      </tspan>
                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-title"
                      >
                        Completed
                      </tspan>
                    </text>
                  );
                }
              }}
            />
          </PolarRadiusAxis>
        </RadialBarChart>
      </ChartContainer>
    </div>
  );
}

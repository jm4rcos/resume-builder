import React from "react";
import { UseFormReturn, useWatch } from "react-hook-form";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import { ResumeFormData } from "@/interfaces";
import { calculateCompleteness } from "@/lib/calculate-completeness";

function ResumeRadialChart({ form }: { form: UseFormReturn<ResumeFormData> }) {
  const formValues = useWatch({
    control: form.control,
  });

  const { completeness, feedback } = calculateCompleteness(
    formValues as ResumeFormData
  );

  const data = [
    {
      name: "Completeness",
      value: completeness,
      fill: `rgb(${255 - completeness * 2.55}, ${completeness * 2.55}, 0)`,
    },
  ];

  return (
    <div>
      <RadialBarChart
        width={300}
        height={300}
        cx={150}
        cy={150}
        innerRadius={80}
        outerRadius={140}
        barSize={30}
        data={data}
        startAngle={90}
        endAngle={-270}
      >
        <PolarAngleAxis
          type="number"
          domain={[0, 100]}
          angleAxisId={0}
          tick={false}
        />
        <RadialBar
          background
          dataKey="value"
          cornerRadius={30}
          fill="#82ca9d"
        />
        <text
          x={150}
          y={150}
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-2xl font-bold"
        >
          {completeness}%
        </text>
      </RadialBarChart>
      <p className="mt-4 text-gray-600">{feedback}</p>
    </div>
  );
}

export default ResumeRadialChart;

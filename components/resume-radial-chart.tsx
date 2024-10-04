import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";
import { ResumeFormData } from "@/interfaces";
import { calculateCompleteness } from "@/utils/calculate-completeness";
import { UseFormReturn, useWatch } from "react-hook-form";

function ResumeRadialChart({ form }: { form: UseFormReturn<ResumeFormData> }) {
  const formValues = useWatch({
    control: form.control,
  });

  const { completeness } = calculateCompleteness(formValues as ResumeFormData);

  const data = [
    {
      name: "Completeness",
      value: completeness,
      fill: `rgb(${255 - completeness * 2.55}, ${completeness * 2.55}, 0)`,
    },
  ];

  return (
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
      <RadialBar background dataKey="value" cornerRadius={30} fill="#82ca9d" />
      <text
        x={150}
        y={150}
        fill="#64748b"
        textAnchor="middle"
        dominantBaseline="middle"
        className="text-2xl font-bold text-slate-500"
      >
        {completeness}%
      </text>
    </RadialBarChart>
  );
}

export default ResumeRadialChart;

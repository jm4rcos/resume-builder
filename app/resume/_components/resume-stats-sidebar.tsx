import dynamic from "next/dynamic";
import { UseFormReturn } from "react-hook-form";

import { ResumeFormData } from "@/interfaces";

const ResumeRadialChart = dynamic(
  () => import("../../../components/resume-radial-chart"),
  {
    ssr: false,
  }
);

interface ResumeStatsSidebarProps {
  form: UseFormReturn<ResumeFormData>;
  feedback: string[];
}

export const ResumeStatsSidebar = ({
  form,
  feedback,
}: ResumeStatsSidebarProps) => {
  return (
    <div className="flex bg-background pb-16 px-4 flex-col items-center w-full">
      <div>
        <ResumeRadialChart form={form} />
      </div>
      <div className="gap-2 flex flex-col cursor-pointer">
        {feedback.length > 0 && (
          <>
            <h3 className="text-lg font-semibold text-center">
              How to improve your resume
            </h3>
            {feedback.map((f, i) => {
              if (f === "") return null;
              return (
                <div
                  key={i}
                  className="p-3 border border-blue-500 rounded-lg bg-blue-200"
                >
                  <p className="text-sm font-semibold text-blue-500">{f}</p>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

import dynamic from "next/dynamic";
import { UseFormReturn, useWatch } from "react-hook-form";

import { ResumeFormData } from "@/interfaces";
import { ResumeFeedback } from "./resume-feed-back";
import { calculateCompleteness } from "@/utils/calculate-completeness";
import { LevelBadge } from "./level-badge";

const ResumeRadialChart = dynamic(
  () => import("../../../components/resume-radial-chart"),
  {
    ssr: false,
  }
);

interface ResumeStatsSidebarProps {
  form: UseFormReturn<ResumeFormData>;
}

export const ResumeStatsSidebar = ({ form }: ResumeStatsSidebarProps) => {
  const formValues = useWatch({
    control: form.control,
  });

  const { feedback, profileLevel, overallFeedback } = calculateCompleteness(
    formValues as ResumeFormData
  );
  console.log(overallFeedback, profileLevel);

  return (
    <div className="flex bg-background pb-16 px-4 flex-col items-center w-full">
      <ResumeRadialChart form={form} />
      <div className="mb-4">
        <LevelBadge
          profileLevel={profileLevel}
          overallFeedback={overallFeedback}
        />
      </div>
      <ResumeFeedback feedback={feedback} />
    </div>
  );
};

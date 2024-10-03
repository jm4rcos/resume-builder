import { ResumeTabs } from "@/app/resume/_components/resume-tabs";
import { UseFormReturn } from "react-hook-form";
import { ResumeFormData } from "@/interfaces";

export const InfoSidebar = ({
  form,
}: {
  form: UseFormReturn<ResumeFormData>;
}) => {
  return (
    <div className="w-full pb-20 h-screen bg-foreground py-6">
      <ResumeTabs form={form} />
    </div>
  );
};

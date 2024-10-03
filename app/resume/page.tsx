"use client";

import { FormProvider } from "react-hook-form";
import { useResumeForm } from "@/hooks/use-resume-form";
import { DesktopPanel } from "@/components/desktop-panel";
import ResumeForm from "@/components/resume-form";

const ResumePage = () => {
  const { form } = useResumeForm();

  return (
    <FormProvider {...form}>
      <div className="md:flex hidden w-full pt-16 bg-foreground">
        <DesktopPanel form={form} />
      </div>
      <div className="md:hidden flex w-full pt-16 bg-foreground">
        <ResumeForm form={form} />
      </div>
    </FormProvider>
  );
};

export default ResumePage;

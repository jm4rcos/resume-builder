"use client";

import { Preview } from "@/components/preview";
import ResumeForm from "@/components/resume-form";
import { useResumeForm } from "@/hooks/use-resume-form";
import { FormProvider } from "react-hook-form";

const ResumePage = () => {
  const { form } = useResumeForm();
  return (
    <FormProvider {...form}>
      <div className="flex w-full pt-16 justify-between bg-foreground">
        {/* <ResumeForm form={form} /> */}
        <div className="flex justify-center pb-20 h-screen w-full overflow-auto p-6">
          <Preview />
        </div>
        {/* This will be the right column to edit the resume */}
        {/* <div className="max-w-xs w-full mx-auto p-4 bg-background h-screen overflow-auto"></div> */}
      </div>
    </FormProvider>
  );
};

export default ResumePage;

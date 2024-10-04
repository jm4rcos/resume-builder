"use client";

import { FormProvider } from "react-hook-form";
import { useResumeForm } from "@/hooks/use-resume-form";
import { DesktopPanel } from "@/components/desktop-panel";
import { InfoSidebar } from "@/components/info-sidebar";

const ResumePage = () => {
  const { form } = useResumeForm();

  return (
    <FormProvider {...form}>
      <div className="md:flex hidden w-full h-screen overflow-auto pt-16 bg-foreground">
        <DesktopPanel form={form} />
      </div>
      <div className="md:hidden flex w-full h-screen overflow-auto pt-16 bg-foreground">
        <InfoSidebar form={form} />
      </div>
    </FormProvider>
  );
};

export default ResumePage;

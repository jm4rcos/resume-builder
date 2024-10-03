"use client";

import { ResumeFormData } from "@/interfaces";
import { UseFormReturn } from "react-hook-form";

import dynamic from "next/dynamic";
const ResumeRadialChart = dynamic(() => import("../resume-radial-chart"), {
  ssr: false,
});

interface EditSidebarProps {
  form: UseFormReturn<ResumeFormData>;
}

export const EditSidebar = ({ form }: EditSidebarProps) => {
  return (
    <div className="w-full mx-auto p-4 bg-background h-screen overflow-auto">
      {/* <Align /> */}
      <ResumeRadialChart form={form} />
    </div>
  );
};

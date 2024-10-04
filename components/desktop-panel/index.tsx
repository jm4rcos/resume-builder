"use client";

import { UseFormReturn } from "react-hook-form";
import { Preview } from "../preview";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";
import { ResumeFormData } from "@/interfaces";
import ResumeForm from "@/app/(resume)/_components/resume-form";
import { ResumeStatsSidebar } from "@/app/(resume)/_components/resume-stats-sidebar";
import { exportPDF } from "@/lib/convert-to-pdf";
import { Button } from "../ui/button";
import { DownloadIcon } from "lucide-react";

export const DesktopPanel = ({
  defaultLayout = [140, 600, 100],
  form,
}: {
  defaultLayout?: number[] | undefined;
  form: UseFormReturn<ResumeFormData>;
}) => {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };

  function downloadPDF() {
    const resumePage = document.getElementById("resume-page");
    if (!resumePage) {
      console.log("Resume preview not found");
      return;
    }
    exportPDF(resumePage);
  }

  return (
    <ResizablePanelGroup onLayout={onLayout} direction="horizontal">
      <ResizablePanel
        defaultSize={defaultLayout[0]}
        className="max-w-[500px] min-w-[230px] lg:min-w-[260px]"
      >
        <ResumeForm form={form} />
      </ResizablePanel>

      <ResizableHandle withHandle />

      <ResizablePanel defaultSize={defaultLayout[1]} className="max-w-[1420px]">
        <div className="w-full relative flex xl:justify-center pb-20 h-screen overflow-auto p-6">
          <Button
            type="button"
            onClick={downloadPDF}
            size="sm"
            className="absolute top-4 right-4"
          >
            Download <DownloadIcon className="w-5 h-5 ml-2" />
          </Button>

          <Preview />
        </div>
      </ResizablePanel>

      <ResizableHandle withHandle className="" />

      <ResizablePanel
        className="max-w-[500px] lg:max-w-[500px] bg-background min-w-[230px] lg:min-w-[250px]"
        defaultSize={defaultLayout[2]}
      >
        <div className="w-full pb-16 h-screen overflow-auto">
          <ResumeStatsSidebar form={form} />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

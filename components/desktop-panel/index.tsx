"use client";

import { UseFormReturn } from "react-hook-form";
import { EditSidebar } from "../edit-sidebar";
import { Preview } from "../preview";
import ResumeForm from "../resume-form";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";
import { ResumeFormData } from "@/interfaces";

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
  return (
    <ResizablePanelGroup onLayout={onLayout} direction="horizontal">
      <ResizablePanel
        defaultSize={defaultLayout[0]}
        className="max-w-[500px] min-w-[230px] lg:min-w-[250px]"
      >
        <ResumeForm form={form} />
      </ResizablePanel>

      <ResizableHandle withHandle />

      <ResizablePanel
        defaultSize={defaultLayout[1]} // Painel central permanece com tamanho fixo
        className="max-w-[1420px]"
      >
        <div className="w-full flex xl:justify-center pb-20 h-screen overflow-auto p-6">
          <Preview />
        </div>
      </ResizablePanel>

      <ResizableHandle withHandle className="" />

      <ResizablePanel
        className="max-w-[500px] lg:max-w-[500px] min-w-[230px] lg:min-w-[250px]"
        defaultSize={defaultLayout[2]}
      >
        <EditSidebar />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

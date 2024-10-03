"use client";

import { FormProvider } from "react-hook-form";
import { Preview } from "@/components/preview";
import { useResumeForm } from "@/hooks/use-resume-form";
import ResumeForm from "@/components/resume-form";
import { EditSidebar } from "@/components/edit-sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const ResumePage = ({
  defaultLayout = [140, 400, 140],
}: {
  defaultLayout?: number[] | undefined;
}) => {
  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };

  const { form } = useResumeForm();

  return (
    <FormProvider {...form}>
      <ResizablePanelGroup
        onLayout={onLayout}
        direction="horizontal"
        className="flex w-full pt-16 bg-foreground"
      >
        <ResizablePanel
          collapsible
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
    </FormProvider>
  );
};

export default ResumePage;

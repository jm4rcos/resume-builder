import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EyeIcon, FileChartColumnIcon, FileIcon } from "lucide-react";
import ResumeForm from "./resume-form";
import { UseFormReturn } from "react-hook-form";
import { ResumeFormData } from "@/interfaces";
import { Preview } from "@/components/preview";
import { NavbarPreviewOptions } from "@/components/preview/_components/navbar-preview-options";
import { ResumeStatsSidebar } from "./resume-stats-sidebar";

export const ResumeTabs = ({
  form,
}: {
  form: UseFormReturn<ResumeFormData>;
}) => {
  return (
    <Tabs
      defaultValue="info"
      className="w-full m-0 h-full flex flex-col items-center"
    >
      <TabsList className="w-auto space-x-4">
        <TabsTrigger value="info">
          <FileIcon className="w-5 h-5 mr-2" /> Form
        </TabsTrigger>
        <TabsTrigger value="preview">
          <EyeIcon className="w-5 h-5 mr-2" /> Preview
        </TabsTrigger>
        <TabsTrigger value="overview">
          <FileChartColumnIcon className="w-5 h-5 mr-2" /> Overview
        </TabsTrigger>
      </TabsList>
      <TabsContent
        className="font-semibold w-full text-start text-xs"
        value="info"
      >
        <ResumeForm form={form} />
      </TabsContent>
      <TabsContent
        className="font-semibold overflow-auto w-full relative text-xs flex flex-col gap-4 items-center justify-center bg-foreground pt-4"
        value="preview"
      >
        <NavbarPreviewOptions />
        <div className="w-full overflow-auto">
          <Preview />
        </div>
      </TabsContent>
      <TabsContent
        className="relative h-screen items-center bg-foreground -mt-4"
        value="overview"
      >
        <ResumeStatsSidebar
          form={form}
          // feedback={feedback}
          // profileLevel={profileLevel}
          // overallFeedback={overallFeedback}
        />
      </TabsContent>
    </Tabs>
  );
};

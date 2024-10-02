import { Preview } from "@/components/preview";
import ResumeForm from "@/components/resume-form";

const ResumePage = () => {
  return (
    <div className="flex gap-4 w-full pt-16 justify-between bg-foreground">
      <ResumeForm />
      <div className="w-full flex justify-center h-screen overflow-auto p-6">
        <Preview />
      </div>
      <div className="max-w-xs w-full mx-auto p-4 bg-background h-screen overflow-auto"></div>
    </div>
  );
};

export default ResumePage;

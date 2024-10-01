import { Preview } from "@/components/preview";
import ResumeForm from "@/components/resume-form";

const ResumePage = () => {
  return (
    <div className="flex gap-4 w-full justify-between bg-slate-100">
      <ResumeForm />
      <Preview />
      <div className="max-w-xs w-full mx-auto p-4 bg-white h-screen overflow-auto"></div>
    </div>
  );
};

export default ResumePage;

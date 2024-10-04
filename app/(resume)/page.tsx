"use client";

import dynamic from "next/dynamic";

const ResumeContent = dynamic(() => import("./_components/resume-content"), {
  ssr: false,
});

const ResumePage = () => {
  return <ResumeContent />;
};

export default ResumePage;

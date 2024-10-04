"use client";

import { Navbar } from "@/components/navbar";

const ResumeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex-col bg-foreground overflow-hidden flex h-screen">
      <Navbar />
      <div className=" w-full flex justify-center mx-auto">{children}</div>
    </div>
  );
};

export default ResumeLayout;

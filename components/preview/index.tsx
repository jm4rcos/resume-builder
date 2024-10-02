"use client";

import { useResumeForm } from "@/hooks/use-resume-form";
import { useScaleStore } from "@/store/use-scale-store";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

export const Preview = () => {
  const { scale } = useScaleStore();
  const { watch } = useFormContext();

  console.log(watch("personalInfo"));

  useEffect(() => {
    console.log(watch("personalInfo"));
  }, [watch]);

  return (
    <div
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "top center",
        width: "210mm",
        height: "297mm",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
      className="flex w-full overflow-auto bg-background p-12 gap-4"
    >
      <div className="flex flex-col opacity-40 w-full h-full">
        <h1>{watch("personalInfo.name") || "Your Name"}</h1>
        <h2>{watch("personalInfo.profession") || "Your Profession"}</h2>
      </div>
    </div>
  );
};

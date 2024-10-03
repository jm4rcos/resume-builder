"use client";

import { useFormContext } from "react-hook-form";

import { useScaleStore } from "@/store/use-scale-store";
import { Header } from "./header";
import { Education } from "./education";
import { Contact } from "./contact";
import { Profile } from "./profile";
import { IEducation, IExperience } from "@/interfaces";
import { Experience } from "./experience";

export const DefaultTemplate = ({ size }: { size?: number }) => {
  const { scale } = useScaleStore();
  const { watch } = useFormContext();

  const personalInfo = watch("personalInfo");
  const education: IEducation = watch("education");
  const experience: IExperience[] = watch("experience");

  return (
    <div
      style={{
        transform: `scale(${size ? size : scale})`,
        transformOrigin: "top center",
        width: "210mm",
        height: "297mm",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
      className="bg-background flex flex-col md:min-w-[210mm]"
    >
      <div className="flex flex-col gap-2 h-full p-12">
        <Header {...personalInfo} />
        <div className="flex py-4 gap-6">
          <div className="flex w-1/3 h-full pr-2 flex-col gap-6">
            {education && <Education {...education} />}
            <Contact {...personalInfo} />
          </div>
          <div className="flex flex-col gap-12 w-full">
            <Profile {...personalInfo} />

            <Experience data={experience} />
          </div>
        </div>
      </div>
    </div>
  );
};

"use client";

import { useFormContext } from "react-hook-form";

import { useScaleStore } from "@/store/use-scale-store";
import { Header } from "./header";
import { Education } from "./education";
import { Contact } from "./contact";
import { Profile } from "./profile";
import { IEducation, IExperience } from "@/interfaces";
import { Experience } from "./experience";
import { Skills } from "./skills";

export const DefaultTemplate = ({ size }: { size?: number }) => {
  const { scale } = useScaleStore();
  const { watch } = useFormContext();

  const personalInfo = watch("personalInfo");
  const education: IEducation = watch("education");
  const experience: IExperience[] = watch("experience");
  const skills: { name: string }[] = watch("skills");

  return (
    <div id="resume-page" className="p-4 flex justify-center min-w-[210mm]">
      <div
        style={{
          transform: `scale(${size ? size : scale})`,
          transformOrigin: "top center",
        }}
        className="page bg-white break-words break-all shadow-lg w-[210mm] min-h-[297mm] flex flex-col mx-auto mb-4 p-[2cm]"
      >
        <div className="flex flex-col h-full">
          <Header {...personalInfo} />
          <div className="flex py-4 gap-4">
            <div className="flex w-1/3 h-full pr-2 flex-col space-y-6">
              <Contact {...personalInfo} />
              {education.degree && <Education {...education} />}
              {skills.length > 0 && <Skills data={skills} />}
            </div>
            <div className="flex flex-col gap-8 w-2/3">
              <Profile {...personalInfo} />
              {experience.length > 0 && <Experience data={experience} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

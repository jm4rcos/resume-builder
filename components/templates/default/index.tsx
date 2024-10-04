"use client";

import { useFormContext } from "react-hook-form";

import { useScaleStore } from "@/store/use-scale-store";
import { Header } from "./header";
import { Education } from "./education";
import { Contact } from "./contact";
import { Profile } from "./profile";
import { IEducation, IExperience } from "@/interfaces";
import { Experience } from "./experience";
import { DownloadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { exportPDF } from "@/lib/convert-to-pdf";

export const DefaultTemplate = ({ size }: { size?: number }) => {
  const { scale } = useScaleStore();
  const { watch } = useFormContext();

  const personalInfo = watch("personalInfo");
  const education: IEducation = watch("education");
  const experience: IExperience[] = watch("experience");

  function downloadPDF() {
    const resumePage = document.getElementById("resume-page");
    if (!resumePage) {
      console.log("Resume preview not found");
      return;
    }
    exportPDF(resumePage);
  }

  return (
    <div
      id="resume-page"
      className="p-4 relative flex justify-center min-w-[210mm]"
    >
      <Button
        type="button"
        onClick={downloadPDF}
        size="sm"
        className="absolute top-4 right-4"
      >
        Download <DownloadIcon className="w-5 h-5 ml-2" />
      </Button>
      <div
        style={{
          transform: `scale(${size ? size : scale})`,
          transformOrigin: "top center",
        }}
        className="page bg-white break-words break-all shadow-lg w-[210mm] min-h-[297mm] flex flex-col mx-auto mb-4 p-[2cm]"
      >
        <div className="flex flex-col gap-2 h-full">
          <Header {...personalInfo} />
          <div className="flex py-4 gap-6">
            <div className="flex w-1/3 h-full pr-2 flex-col gap-4">
              <Contact {...personalInfo} />
              {education.degree && <Education {...education} />}
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

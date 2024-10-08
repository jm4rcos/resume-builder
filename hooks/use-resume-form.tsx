"use client";

import { ResumeFormData } from "@/interfaces";
import { exportPDF } from "@/lib/convert-to-pdf";
import { resumeSchema } from "@/schemas/resume-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const defaultValues: Partial<ResumeFormData> = {
  personalInfo: {
    firstName: "",
    lastName: "",
    profession: "",
    phone: "",
    email: "",
    imageUrl: "",
    summary: "",
  },
  experience: [],
  education: {
    degree: "",
    institution: "",
    endDate: new Date(),
  },
  skills: [],
};

export const useResumeForm = () => {
  const form = useForm<ResumeFormData>({
    resolver: zodResolver(resumeSchema),
    defaultValues,
  });

  function onError(errors: unknown) {
    console.error(errors);
  }

  const resumePage = document.getElementById("resume-preview");
  async function onSubmit(data: ResumeFormData) {
    if (!resumePage) {
      console.log("Resume preview not found");
      return;
    }
    exportPDF(resumePage);
    console.log(data);
  }

  return {
    form,
    onSubmit,
    onError,
  };
};

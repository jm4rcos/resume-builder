"use client";

import { resumeSchema } from "@/schemas/resume-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export type ResumeFormData = z.infer<typeof resumeSchema>;

export const defaultValues: Partial<ResumeFormData> = {
  personalInfo: {
    name: "",
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
    startDate: new Date(),
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
    console.log(errors);
  }

  async function onSubmit(data: ResumeFormData) {
    console.log(data);
  }

  return {
    form,
    onSubmit,
    onError,
  };
};

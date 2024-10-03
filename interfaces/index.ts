import { educationSchema } from "@/schemas/education-schema";
import { experienceSchema } from "@/schemas/experiences-schema";
import { personalInfoSchema } from "@/schemas/personal-info-schema";
import { resumeSchema } from "@/schemas/resume-schema";
import { z } from "zod";

export type ResumeFormData = z.infer<typeof resumeSchema>;
export type IPersonalInfo = z.infer<typeof personalInfoSchema>;
export type IEducation = z.infer<typeof educationSchema>;
export type IExperience = z.infer<typeof experienceSchema>;

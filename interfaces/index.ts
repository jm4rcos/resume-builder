import { educationSchema } from "@/schemas/education-schema";
import { experienceSchema } from "@/schemas/experiences-schema";
import { personalInfoSchema } from "@/schemas/personal-info-schema";
import { resumeSchema } from "@/schemas/resume-schema";
import { z } from "zod";

export type ResumeFormData = z.infer<typeof resumeSchema>;
export type IPersonalInfo = z.infer<typeof personalInfoSchema>;
export type IEducation = z.infer<typeof educationSchema>;
export type IExperience = z.infer<typeof experienceSchema>;

export interface ResumeEntity {
  personalInfo: {
    firstName: string;
    profession: string;
    email: string;
    lastName?: string;
    phone?: string;
    imageUrl?: string;
    summary?: string;
  };
  experience?: Array<{
    jobTitle: string;
    employer: string;
    startDate: Date;
    endDate?: Date;
    description?: string;
    city?: string;
  }>;
  education?: {
    degree: string;
    institution: string;
    startDate: Date;
    endDate?: Date;
  };
  skills?: string[];
}

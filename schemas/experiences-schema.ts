import { z } from "zod";

export const experienceSchema = z.object({
  jobTitle: z.string().min(1, "Job title is required"),
  employer: z.string().min(1, "Employer is required"),
  startDate: z.date(),
  endDate: z.date().optional(),
  description: z.string().optional(),
  city: z.string().optional(),
});

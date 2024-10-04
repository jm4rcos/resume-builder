import { z } from "zod";

export const experienceSchema = z.object({
  jobTitle: z.string().min(1, "Job title is required"),
  employer: z.string().min(1, "Employer is required"),
  startDate: z.date().min(new Date(), "Start date is required"),
  endDate: z.date().optional(),
  present: z.boolean().optional(),
  description: z.string().optional(),
  city: z.string().optional(),
});

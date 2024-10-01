import { z } from "zod";

export const educationSchema = z.object({
  degree: z.string().min(1, "Degree is required"),
  institution: z.string().min(1, "Institution is required"),
  startDate: z.date(),
  endDate: z.date().optional(),
});

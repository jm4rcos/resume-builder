import { z } from "zod";

export const educationSchema = z.object({
  degree: z.string().optional(),
  institution: z.string().optional(),
  // startDate: z.date().min(new Date(), "Start date is required"),
  endDate: z.date().min(new Date(), "End date is required"),
});

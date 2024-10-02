import { z } from "zod";

export const educationSchema = z.object({
  degree: z.string().min(1, "Degree is required"),
  institution: z.string().min(1, "Institution is required"),
  startDate: z.date({
    required_error: "Start date is required",
    invalid_type_error: "Start date must be a date",
  }),
  endDate: z
    .date({
      invalid_type_error: "End date must be a date",
      required_error: "End date is required",
    })
    .optional(),
});

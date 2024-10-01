import { z } from "zod";

export const personalInfoSchema = z.object({
  name: z.string().min(1, "Name is required"),
  profession: z.string().min(1, "Profession is required"),
  phone: z.string().optional(),
  email: z.string().email("Invalid email"),
  imageUrl: z.string().optional(),
  summary: z.string().optional(),
});

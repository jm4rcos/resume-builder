import { z } from "zod";

export const personalInfoSchema = z.object({
  firstName: z.string().min(1, "Name is required"),
  lastName: z.string().optional(),
  profession: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().email("Invalid email"),
  imageUrl: z.string().optional(),
  summary: z.string().optional(),
});

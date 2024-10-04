import { z } from "zod";
export const skillsSchema = z.object({
  name: z.string().min(1, "Skill name is required"),
});

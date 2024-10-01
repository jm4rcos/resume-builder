import { z } from "zod";
import { educationSchema } from "./education-schema";
import { experienceSchema } from "./experiences-schema";
import { personalInfoSchema } from "./personal-info-schema";
import { skillsSchema } from "./skills-schema";

export const resumeSchema = z.object({
  personalInfo: personalInfoSchema,
  experience: z.array(experienceSchema).optional(),
  education: educationSchema.optional(),
  skills: skillsSchema.optional(),
});

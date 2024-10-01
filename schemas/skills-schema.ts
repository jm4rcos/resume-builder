import { z } from "zod";
export const skillsSchema = z.array(z.string().min(1, "Skill is required"));

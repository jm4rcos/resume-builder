import { ResumeFormData } from "@/interfaces";

export const calculateSkillsCompleteness = (
  skills: ResumeFormData["skills"]
): { completeness: number; feedback: string[] } => {
  const feedback: string[] = [];

  if (!skills || skills.length === 0) {
    feedback.push("Add at least 5 skills to boost your score.");
    return { completeness: 0, feedback };
  }

  const validSkills = skills.filter((skill) => skill.name.trim() !== "");
  const skillCount = validSkills.length;

  // Calculate completeness based on the number of skills
  // We're aiming for at least 10 skills for full completeness
  const completeness = Math.min((skillCount / 10) * 100, 100);

  if (skillCount < 5) {
    feedback.push("Add at least 5 skills for a higher profile level.");
  } else if (skillCount < 10) {
    feedback.push("Consider adding more skills to showcase your expertise.");
  }

  if (skillCount >= 10) {
    feedback.push("Great job! You have a good range of skills listed.");
  }

  return { completeness, feedback };
};

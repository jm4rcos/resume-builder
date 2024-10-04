import { ResumeFormData } from "@/interfaces";
import { analyzeTextQuality, isNonEmptyString } from "@/lib/utils";
const EXPERIENCE_FIELD_WEIGHTS = {
  jobTitle: 3,
  employer: 2,
  startDate: 1,
  endDate: 1,
  description: 3,
  city: 1,
};

export const calculateExperienceCompleteness = (
  experience: ResumeFormData["experience"]
  // careerLevel: "junior" | "mid" | "senior"
): { completeness: number; feedback: string[] } => {
  const weight = 35;
  const feedback: string[] = [];

  if (!experience || experience.length === 0) {
    feedback.push("Add at least one job experience.");
    return { completeness: 0, feedback };
  }

  const totalFieldWeight = Object.values(EXPERIENCE_FIELD_WEIGHTS).reduce(
    (a, b) => a + b,
    0
  );
  const experienceScores = experience.map((exp) => {
    let expScore = 0;
    Object.entries(EXPERIENCE_FIELD_WEIGHTS).forEach(([field, fieldWeight]) => {
      const value = exp[field as keyof typeof exp];
      if (isNonEmptyString(value) || value instanceof Date) {
        expScore += fieldWeight;
        if (field === "description") {
          const { quality, suggestions } = analyzeTextQuality(value as string);
          expScore += quality * fieldWeight;
          if (suggestions)
            feedback.push(`Experience (${exp.jobTitle}): ${suggestions}`);
        }
      }
    });
    return expScore / totalFieldWeight;
  });

  const averageScore =
    experienceScores.reduce((a, b) => a + b, 0) / experienceScores.length;
  const experienceCountScore = Math.min(experience.length / 3, 1); // Max score at 3 experiences

  const completeness =
    (averageScore * 0.7 + experienceCountScore * 0.3) * weight;

  // Adjust importance based on career level
  // const importanceMultiplier =
  //   careerLevel === "junior" ? 0.8 : careerLevel === "mid" ? 1 : 1.2;
  // completeness *= importanceMultiplier;

  if (experience.length < 2) {
    feedback.push("Add at least 2 job experiences for a higher profile level.");
  }

  return { completeness, feedback };
};

import { ResumeFormData } from "@/interfaces";
import { analyzeTextQuality, isNonEmptyString } from "@/lib/utils";

const FIELD_WEIGHTS = {
  firstName: 3,
  lastName: 3,
  profession: 2,
  email: 3,
  phone: 3,
  imageUrl: 1,
  summary: 3,
};

export const calculatePersonalInfoCompleteness = (
  personalInfo: ResumeFormData["personalInfo"]
  // careerLevel: "junior" | "mid" | "senior"
): { completeness: number; feedback: string[] } => {
  const totalWeight = Object.values(FIELD_WEIGHTS).reduce((a, b) => a + b, 0);
  let weightedCompleteness = 0;
  const feedback: string[] = [];

  Object.entries(FIELD_WEIGHTS).forEach(([field, weight]) => {
    const value = personalInfo[field as keyof typeof personalInfo];
    if (isNonEmptyString(value)) {
      weightedCompleteness += weight;
      if (field === "summary") {
        const { quality, suggestions } = analyzeTextQuality(value as string);
        weightedCompleteness += quality * weight;
        if (suggestions) feedback.push(`Summary: ${suggestions}`);
      }
    } else {
      feedback.push(
        `Add your ${field.replace(/([A-Z])/g, " $1").toLowerCase()}.`
      );
    }
  });

  const completeness = (weightedCompleteness / totalWeight) * 100;

  // Adjust importance based on career level
  // const importanceMultiplier =
  //   careerLevel === "junior" ? 1.2 : careerLevel === "mid" ? 1 : 0.8;

  return {
    completeness,
    feedback,
  };
};

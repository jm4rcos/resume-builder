import { ResumeFormData } from "@/interfaces";

export const calculateExperienceCompleteness = (
  experience: ResumeFormData["experience"]
): { completeness: number; feedback: string[] } => {
  const feedback: string[] = [];

  if (!experience || experience.length === 0) {
    feedback.push("Add at least one job experience.");
    return { completeness: 0, feedback };
  }

  const requiredFields = ["jobTitle", "employer", "startDate"];
  const optionalFields = ["description", "city", "endDate", "present"];

  const experienceScores = experience.map((exp) => {
    const requiredFieldsComplete = requiredFields.filter(
      (field) => exp[field as keyof typeof exp]
    ).length;
    const optionalFieldsComplete = optionalFields.filter(
      (field) => exp[field as keyof typeof exp]
    ).length;

    return (
      (requiredFieldsComplete / requiredFields.length) * 0.7 +
      (optionalFieldsComplete / optionalFields.length) * 0.3
    );
  });

  const averageScore =
    experienceScores.reduce((a, b) => a + b, 0) / experienceScores.length;
  const experienceCountScore = Math.min(experience.length / 3, 1); // Max score at 3 experiences

  const completeness = (averageScore * 0.7 + experienceCountScore * 0.3) * 100;

  if (experience.length < 2) {
    feedback.push("Add at least 2 job experiences for a higher profile level.");
  }

  return { completeness, feedback };
};

import { ResumeFormData } from "@/interfaces";

export const calculateEducationCompleteness = (
  education: ResumeFormData["education"]
): { completeness: number; feedback: string[] } => {
  const requiredFields = ["degree", "institution", "endDate"];
  const optionalFields = ["startDate"];
  const feedback: string[] = [];

  if (education) {
    const requiredFieldsComplete = requiredFields.filter(
      (field) => education[field as keyof typeof education]
    ).length;
    const optionalFieldsComplete = optionalFields.filter(
      (field) => education[field as keyof typeof education]
    ).length;

    const requiredCompleteness =
      (requiredFieldsComplete / requiredFields.length) * 80;
    const optionalCompleteness =
      (optionalFieldsComplete / optionalFields.length) * 20;

    const completeness = requiredCompleteness + optionalCompleteness;

    if (requiredFieldsComplete < requiredFields.length) {
      feedback.push("Complete all required education fields.");
    }

    return { completeness, feedback };
  }

  feedback.push("Add your education details.");
  return { completeness: 0, feedback };
};

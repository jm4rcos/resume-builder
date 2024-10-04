import { ResumeFormData } from "@/interfaces";

export const calculatePersonalInfoCompleteness = (
  personalInfo: ResumeFormData["personalInfo"]
): { completeness: number; feedback: string[] } => {
  const requiredFields = ["firstName", "lastName", "email", "profession"];
  const optionalFields = ["phone", "imageUrl", "summary"];
  const feedback: string[] = [];

  const requiredFieldsComplete = requiredFields.filter(
    (field) => personalInfo[field as keyof typeof personalInfo]
  ).length;
  const optionalFieldsComplete = optionalFields.filter(
    (field) => personalInfo[field as keyof typeof personalInfo]
  ).length;

  const requiredCompleteness =
    (requiredFieldsComplete / requiredFields.length) * 70;
  const optionalCompleteness =
    (optionalFieldsComplete / optionalFields.length) * 30;

  const completeness = requiredCompleteness + optionalCompleteness;

  if (requiredFieldsComplete < requiredFields.length) {
    feedback.push("Complete all required personal information fields.");
  }

  if (optionalFieldsComplete < optionalFields.length) {
    feedback.push(
      "Consider adding optional personal details for a more complete profile."
    );
  }

  return { completeness, feedback };
};

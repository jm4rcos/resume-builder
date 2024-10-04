import { ResumeFormData } from "@/interfaces";
import { isNonEmptyString } from "@/lib/utils";

export const calculateEducationCompleteness = (
  education: ResumeFormData["education"]
): { completeness: number; feedback: string[] } => {
  const weight = 25;
  const fields = ["degree", "institution", "endDate"] as const;
  const feedback: string[] = [];

  if (education) {
    const filledFields = fields.filter(
      (field) =>
        isNonEmptyString(education[field]) || education[field] instanceof Date
    );

    if (filledFields.length < fields.length) {
      feedback.push(
        "Complete all fields in your education (Degree, Institution, End Date, etc.)."
      );
    }

    return {
      completeness: (filledFields.length / fields.length) * weight,
      feedback,
    };
  }

  feedback.push("Add your education details.");
  return { completeness: 0, feedback };
};

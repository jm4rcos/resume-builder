import { ResumeFormData } from "@/interfaces";

export const calculateCompleteness = (
  resumeData: ResumeFormData
): { completeness: number; feedback: string } => {
  let totalWeight = 0;
  let filledWeight = 0;
  let feedback = "";

  // Personal Info (20%)
  const personalInfoWeight = 20;
  const allPersonalInfoFields = [
    "firstName",
    "lastName",
    "profession",
    "email",
    "phone", // incluído para melhorar a completude
    "imageUrl",
    "summary",
  ];
  const filledPersonalInfo = allPersonalInfoFields.filter(
    (field) =>
      field in resumeData.personalInfo &&
      resumeData.personalInfo[field as keyof typeof resumeData.personalInfo]
  );

  const personalInfoCompleteness =
    (filledPersonalInfo.length / allPersonalInfoFields.length) *
    personalInfoWeight;
  totalWeight += personalInfoWeight;
  filledWeight += personalInfoCompleteness;

  if (filledPersonalInfo.length < allPersonalInfoFields.length) {
    feedback +=
      "Complete all personal information fields (Name, Profession, Email, etc.). ";
  }

  // Experience (35%)
  const experienceWeight = 35;
  if (resumeData.experience && resumeData.experience.length > 0) {
    const experienceFields = [
      "jobTitle",
      "employer",
      "startDate",
      "endDate",
      "description", // incluído para completude
      "city",
    ];
    let totalExperienceFields = 0;
    let filledExperienceFields = 0;
    resumeData.experience.forEach((exp) => {
      totalExperienceFields += experienceFields.length;
      experienceFields.forEach((field) => {
        if (field in exp && exp[field as keyof typeof exp])
          filledExperienceFields++;
      });
    });
    const experienceCompleteness =
      (filledExperienceFields / totalExperienceFields) * experienceWeight;
    totalWeight += experienceWeight;
    filledWeight += experienceCompleteness;

    if (filledExperienceFields < totalExperienceFields) {
      feedback += "Complete all fields in your job experiences. ";
    }
  } else {
    feedback += "Add at least one job experience to improve your score. ";
  }

  // Education (25%)
  const educationWeight = 25;
  if (resumeData.education) {
    const educationFields = [
      "degree",
      "institution",
      "startDate",
      "endDate",
      // "city",
    ] as const;
    type EducationField = (typeof educationFields)[number];

    const filledEducationFields = educationFields.filter(
      (field: EducationField) => resumeData.education?.[field] != null
    );

    const educationCompleteness =
      (filledEducationFields.length / educationFields.length) * educationWeight;
    totalWeight += educationWeight;
    filledWeight += educationCompleteness;

    if (filledEducationFields.length < educationFields.length) {
      feedback +=
        "Complete all fields in your education (Degree, Institution, Start Date, etc.). ";
    }
  } else {
    feedback += "Add your education details to improve your score. ";
  }

  // Skills (20%)
  const skillsWeight = 20;
  if (resumeData.skills && resumeData.skills.length > 0) {
    const skillsCompleteness = (resumeData.skills.length / 8) * skillsWeight; // incentivando mais de 5 skills
    totalWeight += skillsWeight;
    filledWeight += Math.min(skillsCompleteness, skillsWeight);
  } else {
    feedback += "Add at least 5 skills to boost your score. ";
  }

  const completeness = Math.round((filledWeight / totalWeight) * 100);

  return { completeness, feedback: feedback.trim() };
};

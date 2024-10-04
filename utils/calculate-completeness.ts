import { ResumeFormData } from "@/interfaces";
import { calculateEducationCompleteness } from "./completeness/education-completeness";
import { calculateExperienceCompleteness } from "./completeness/experience-completeness";
import { calculatePersonalInfoCompleteness } from "./completeness/personal-info-completeness";
import { calculateSkillsCompleteness } from "./completeness/skills-completeness";

type CompletionResult = {
  completeness: number;
  feedback: string[];
  profileLevel: string;
  overallFeedback: string;
};

const SECTION_WEIGHTS = {
  personalInfo: 20,
  experience: 35,
  education: 25,
  skills: 20,
};

const determineProfileLevel = (completeness: number): string => {
  if (completeness >= 90) return "Gold";
  if (completeness >= 75) return "Silver";
  if (completeness >= 50) return "Bronze";
  return "Beginner";
};

export const calculateCompleteness = (
  resumeData: ResumeFormData
): CompletionResult => {
  const sections = {
    personalInfo: calculatePersonalInfoCompleteness(resumeData.personalInfo),
    experience: calculateExperienceCompleteness(resumeData.experience),
    education: calculateEducationCompleteness(resumeData.education),
    skills: calculateSkillsCompleteness(resumeData.skills),
  };

  const weightedCompleteness = Object.entries(sections).reduce(
    (sum, [sectionName, sectionResult]) => {
      const weight =
        SECTION_WEIGHTS[sectionName as keyof typeof SECTION_WEIGHTS];
      return sum + (sectionResult.completeness * weight) / 100;
    },
    0
  );

  const allFeedback = Object.values(sections).flatMap(
    (section) => section.feedback
  );

  const completeness = Math.round(weightedCompleteness);
  const profileLevel = determineProfileLevel(completeness);

  const overallFeedback = getOverallFeedback(profileLevel);

  return { completeness, feedback: allFeedback, profileLevel, overallFeedback };
};

function getOverallFeedback(profileLevel: string): string {
  switch (profileLevel) {
    case "Gold":
      return "Excellent work! Your profile is very strong. Consider updating it regularly to maintain its high quality.";
    case "Silver":
      return "Great job! Your profile is solid. Focus on adding more details to your experiences and skills to reach the Gold level.";
    case "Bronze":
      return "Good start! To improve, try to add more detailed descriptions to your experiences and a wider range of relevant skills.";
    default:
      return "You're on the right track! Focus on completing all sections of your profile, especially your work experiences and skills.";
  }
}

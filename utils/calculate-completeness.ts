import { ResumeFormData } from "@/interfaces";
import { calculateEducationCompleteness } from "./completeness/education-completeness";
import { calculateExperienceCompleteness } from "./completeness/experience-completeness";
import { calculatePersonalInfoCompleteness } from "./completeness/personal-info-completeness";
import { calculateSkillsCompleteness } from "./completeness/skills-completeness";

type CompletionResult = {
  completeness: number;
  feedback: string[];
  profileLevel: string;
};

const determineProfileLevel = (completeness: number): string => {
  if (completeness >= 90) return "Gold";
  if (completeness >= 75) return "Silver";
  if (completeness >= 50) return "Bronze";
  return "Beginner";
};

export const calculateCompleteness = (
  resumeData: ResumeFormData
  // careerLevel: "junior" | "mid" | "senior",
): CompletionResult => {
  const sections = [
    calculatePersonalInfoCompleteness(resumeData.personalInfo),
    calculateExperienceCompleteness(resumeData.experience),
    calculateEducationCompleteness(resumeData.education),
    calculateSkillsCompleteness(resumeData.skills),
  ];

  const totalCompleteness = sections.reduce(
    (sum, section) => sum + section.completeness,
    0
  );
  const allFeedback = sections.flatMap((section) => section.feedback);

  const completeness = Math.round(totalCompleteness);
  const profileLevel = determineProfileLevel(completeness);

  // Add overall feedback based on profile level
  const overallFeedback = getOverallFeedback(profileLevel);
  allFeedback.push(overallFeedback);

  return { completeness, feedback: allFeedback, profileLevel };
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

import { ResumeFormData } from "@/interfaces";

export const getChartData = (formValues: ResumeFormData) => {
  const { personalInfo, experience, education, skills } = formValues;

  let filledCount = 0;
  let totalCount = 5; // número de campos obrigatórios

  // Contando campos obrigatórios de personalInfo
  if (personalInfo.firstName) filledCount++;
  if (personalInfo.lastName) filledCount++;
  if (personalInfo.profession) filledCount++;
  if (personalInfo.phone) filledCount++;
  if (personalInfo.email) filledCount++;

  // Contando se há experiência
  if (experience && experience.length > 0) {
    filledCount++;
    totalCount++; // Experiência não é obrigatória, então conta como um campo adicional
  }

  // Contando se há educação
  if (education && education.degree && education.institution) {
    filledCount++;
    totalCount++; // Educação não é obrigatória, então conta como um campo adicional
  }

  // Contando se há skills
  if (skills && skills.length > 0) {
    filledCount++;
    totalCount++; // Skills não são obrigatórias
  }

  const percentageFilled = (filledCount / totalCount) * 100;

  return [
    {
      name: "Fields",
      value: percentageFilled,
      fill: "var(--secondary)",
    },
    // {
    //   name: "Remaining",
    //   value: 100 - percentageFilled,
    //   fill: "var(--muted)",
    // },
  ];
};

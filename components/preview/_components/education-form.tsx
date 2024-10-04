import React from "react";
import { useFormContext } from "react-hook-form";

import { InputField } from "@/components/input-field";
import { DateField } from "@/components/date-field";
import { ResumeFormData } from "@/interfaces";

const EducationForm: React.FC = () => {
  const {
    formState: { errors },
  } = useFormContext<ResumeFormData>();

  return (
    <div className="space-y-4">
      <InputField
        placeholder="Degree"
        name={"education.degree" as keyof ResumeFormData}
        error={errors.education?.degree?.message}
      />

      <InputField
        placeholder="Institution"
        name={"education.institution" as keyof ResumeFormData}
        error={errors.education?.institution?.message}
      />

      {/* <DateField
        placeholder="Start Date"
        name={"education.startDate" as keyof ResumeFormData}
        error={errors.education?.startDate?.message}
      /> */}

      <DateField
        placeholder="End Date"
        name={"education.endDate" as keyof ResumeFormData}
        error={errors.education?.endDate?.message}
      />
    </div>
  );
};

export default EducationForm;

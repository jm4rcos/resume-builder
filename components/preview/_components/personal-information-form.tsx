import React from "react";
import { useFormContext } from "react-hook-form";
import { ResumeFormData } from "@/hooks/use-resume-form";
import { InputField } from "@/components/input-field";

const PersonalInfoForm: React.FC = () => {
  const {
    formState: { errors },
  } = useFormContext<ResumeFormData>();

  return (
    <div className="space-y-3">
      <InputField
        placeholder="Your Name"
        error={errors.personalInfo?.name?.message}
        name={"personalInfo.name" as keyof ResumeFormData}
      />

      <InputField
        placeholder="Title"
        error={errors.personalInfo?.profession?.message}
        name={"personalInfo.profession" as keyof ResumeFormData}
      />

      <InputField
        placeholder="Phone"
        error={errors.personalInfo?.phone?.message}
        name={"personalInfo.phone" as keyof ResumeFormData}
      />

      <InputField
        placeholder="Email"
        error={errors.personalInfo?.email?.message}
        name={"personalInfo.email" as keyof ResumeFormData}
        type="email"
      />

      <InputField
        placeholder="Image URL"
        error={errors.personalInfo?.imageUrl?.message}
        name={"personalInfo.imageUrl" as keyof ResumeFormData}
      />

      <InputField
        type="textarea"
        placeholder="Summary"
        error={errors.personalInfo?.summary?.message}
        name={"personalInfo.summary" as keyof ResumeFormData}
      />
    </div>
  );
};

export default PersonalInfoForm;

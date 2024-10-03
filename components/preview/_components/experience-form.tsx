import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/input-field";
import { DateField } from "@/components/date-field";
import { ResumeFormData } from "@/interfaces";

const ExperienceForm: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<ResumeFormData>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
  });

  return (
    <div className="space-y-4">
      {fields.map((field, index) => (
        <div key={field.id} className="space-y-4">
          <InputField
            placeholder="Job Title"
            name={`experience.${index}.jobTitle`}
            error={errors.experience?.[index]?.jobTitle?.message}
          />
          <InputField
            placeholder="Company"
            name={`experience.${index}.employer`}
            error={errors.experience?.[index]?.employer?.message}
          />

          <DateField
            placeholder="Start Date"
            name={`experience.${index}.startDate`}
            error={errors.experience?.[index]?.startDate?.message}
          />

          <DateField
            placeholder="End Date"
            name={`experience.${index}.endDate`}
            error={errors.experience?.[index]?.endDate?.message}
          />

          <InputField
            placeholder="City"
            name={`experience.${index}.city`}
            error={errors.experience?.[index]?.city?.message}
          />

          <InputField
            placeholder="Description"
            name={`experience.${index}.description`}
            error={errors.experience?.[index]?.description?.message}
            type="textarea"
          />

          <Button type="button" onClick={() => remove(index)}>
            Remove
          </Button>
        </div>
      ))}
      <Button
        type="button"
        onClick={() =>
          append({
            jobTitle: "",
            employer: "",
            startDate: new Date(),
            endDate: new Date(),
            description: "",
            city: "",
          })
        }
      >
        Add Experience
      </Button>
    </div>
  );
};

export default ExperienceForm;

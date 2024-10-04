"use client";

import { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

import { CheckboxField } from "@/components/checkbox-field";
import { DateField } from "@/components/date-field";
import { InputField } from "@/components/input-field";
import { Button } from "@/components/ui/button";
import { ResumeFormData } from "@/interfaces";

const ExperienceForm: React.FC = () => {
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext<ResumeFormData>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
  });

  const handleCurrent = (value: string | boolean, index: number) => {
    setIsCurrent(value as boolean);
    setValue(`experience.${index}.present`, !isCurrent);
    console.log(value, index);
  };
  const [isCurrent, setIsCurrent] = useState(
    control._formValues.experience[0]?.present || false
  );

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

          <CheckboxField
            index={index}
            onChange={handleCurrent}
            placeholder="I currently work here"
          />

          {isCurrent && (
            <DateField
              placeholder="End Date"
              name={`experience.${index}.endDate`}
              error={errors.experience?.[index]?.endDate?.message}
            />
          )}

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

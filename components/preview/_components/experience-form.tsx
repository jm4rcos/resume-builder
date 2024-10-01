import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ResumeFormData } from "@/hooks/use-resume-form";

const ExperienceForm: React.FC = () => {
  const { control, register } = useFormContext<ResumeFormData>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
  });

  return (
    <div className="space-y-4">
      {fields.map((field, index) => (
        <div key={field.id} className="space-y-2 p-4 border rounded">
          <Input
            {...register(`experience.${index}.jobTitle`)}
            placeholder="Job Title"
          />
          <Input
            {...register(`experience.${index}.employer`)}
            placeholder="Employer"
          />
          <Input
            {...register(`experience.${index}.startDate`)}
            type="date"
            placeholder="Start Date"
          />
          <Input
            {...register(`experience.${index}.endDate`)}
            type="date"
            placeholder="End Date"
          />
          <Input {...register(`experience.${index}.city`)} placeholder="City" />
          <Textarea
            {...register(`experience.${index}.description`)}
            placeholder="Description"
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

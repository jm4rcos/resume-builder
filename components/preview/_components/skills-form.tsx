import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResumeFormData } from "@/hooks/use-resume-form";

const SkillsForm: React.FC = () => {
  const { control, register } = useFormContext<ResumeFormData>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  return (
    <div className="space-y-4">
      {fields.map((field, index) => (
        <div key={field.id} className="flex space-x-2">
          <Input {...register(`skills.${index}`)} placeholder="Skill" />
          <Button type="button" onClick={() => remove(index)}>
            Remove
          </Button>
        </div>
      ))}
      <Button type="button" onClick={() => append([""])}>
        Add Skill
      </Button>
    </div>
  );
};

export default SkillsForm;

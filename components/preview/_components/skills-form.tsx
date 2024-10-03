import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { ResumeFormData } from "@/hooks/use-resume-form";
import { InputField } from "@/components/input-field";

const SkillsForm: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<ResumeFormData>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  return (
    <div className="space-y-4">
      {fields.map((field, index) => (
        <div key={field.id} className="flex space-x-2">
          {/* TODO: fix */}
          <InputField
            name={`skills.${index}.value` as keyof ResumeFormData}
            error={errors.skills?.[index]?.message}
            placeholder="Skill"
          />
          <Button type="button" onClick={() => remove(index)}>
            Remove
          </Button>
        </div>
      ))}
      <Button type="button" onClick={() => append("")}>
        Add Skill
      </Button>
    </div>
  );
};

export default SkillsForm;

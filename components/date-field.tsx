import { Path, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { ResumeFormData } from "@/hooks/use-resume-form";
import { ErrorMessage } from "./ui/error-message";
import { Label } from "./ui/label";

interface DateFieldProps {
  placeholder: string;
  name: Path<ResumeFormData>;
  error?: string;
  className?: string;
}

export const DateField = ({
  placeholder,
  name,
  error,
  className,
}: DateFieldProps) => {
  const { register } = useFormContext<ResumeFormData>();

  return (
    <div>
      <Label>
        {placeholder}
        <input
          type="date"
          className={cn("w-full p-2 border rounded", className)}
          {...register(name, { valueAsDate: true })}
        />
      </Label>
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

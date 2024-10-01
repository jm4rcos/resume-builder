import { Path, useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils";
import { ResumeFormData } from "@/hooks/use-resume-form";
import { ErrorMessage } from "./ui/error-message";

interface InputFieldProps {
  placeholder: string;
  name: Path<ResumeFormData>;
  type?: string;
  error?: string;
  className?: string;
}

export const InputField = ({
  placeholder,
  name,
  type = "text",
  error,
  className,
}: InputFieldProps) => {
  const { register } = useFormContext<ResumeFormData>();

  return (
    <div>
      {type === "textarea" ? (
        <textarea
          placeholder={placeholder}
          {...register(name)}
          className={cn("w-full p-2 border rounded", className)}
        />
      ) : (
        <input
          placeholder={placeholder}
          type={type}
          {...register(name)}
          className={cn("w-full p-2 border rounded", className)}
        />
      )}
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

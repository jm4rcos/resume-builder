import { Path, useFormContext } from "react-hook-form";

import { cn } from "@/lib/utils";
import { ResumeFormData } from "@/hooks/use-resume-form";

import { ErrorMessage } from "./ui/error-message";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

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
    <>
      {type === "textarea" ? (
        <Textarea
          placeholder={placeholder}
          {...register(name)}
          className={cn(
            "w-full mt-2 p-2 border-2 bg-foreground rounded",
            className
          )}
        />
      ) : (
        <Input
          placeholder={placeholder}
          type={type}
          {...register(name)}
          className={cn("w-full p-2 border-2 bg-foreground rounded", className)}
        />
      )}
      {error && <ErrorMessage message={error} />}
    </>
  );
};

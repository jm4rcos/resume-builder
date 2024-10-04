"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

interface CheckBoxFieldProps {
  placeholder: string;
  className?: string;
  onChange: (value: string | boolean, index: number) => void;
  index: number;
}

export function CheckboxField({
  placeholder,
  className,
  onChange,
  index,
}: CheckBoxFieldProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="isCurrent"
        onCheckedChange={(e) => onChange(e, index)}
        className={cn("bg-title checked:bg-link checked:text-title", className)}
      />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {placeholder}
      </label>
    </div>
  );
}

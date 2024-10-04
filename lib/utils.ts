import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isNonEmptyString = (value: string | Date | undefined): boolean =>
  typeof value === "string" && value.trim() !== "";

export const analyzeTextQuality = (
  text: string
): { quality: number; suggestions?: string } => {
  const wordCount = text.split(/\s+/).length;
  let quality = 0;
  let suggestions = "";

  if (wordCount < 20) {
    quality = 0.5;
    suggestions =
      "Try to provide more details. Aim for at least 50 words for a comprehensive description.";
  } else if (wordCount < 50) {
    quality = 0.75;
    suggestions =
      "Good start! Adding a bit more detail could make this excellent.";
  } else {
    quality = 1;
    suggestions = "Excellent! Your description is comprehensive.";
  }

  return { quality, suggestions };
};

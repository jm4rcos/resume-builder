import React from "react";
import { Separator } from "@/components/ui/separator";
import { IExperience } from "@/interfaces";
import { format, isValid, parseISO } from "date-fns";

interface ExperienceProps {
  data: IExperience[];
}

const formatDate = (date: Date | string | undefined): string => {
  if (!date) return "Present";
  const parsedDate = typeof date === "string" ? parseISO(date) : date;
  return isValid(parsedDate) ? format(parsedDate, "MM/yyyy") : "Invalid Date";
};

export const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <div className="w-full space-y-4 flex flex-col">
      <h3 className="text-xl font-semibold">Experiences</h3>
      <Separator className="w-10 py-0.5 bg-link" />
      <div className="space-y-8 flex flex-col">
        {data &&
          data.map((item, index) => {
            const {
              employer,
              city,
              jobTitle,
              description,
              startDate,
              endDate,
              present,
            } = item;
            return (
              <React.Fragment key={index}>
                <div className="flex gap-2 w-full">
                  <div className="space-y-4 w-1/3">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center space-x-1 text-xs">
                        <p className="text-title">{formatDate(startDate)}</p>
                        <p className="text-xs text-title">
                          - {present ? "Present" : formatDate(endDate)}
                        </p>
                      </div>
                      <p className="text-sm text-title font-semibold">
                        {employer || "Institution"}
                      </p>
                      {city && <p className="text-sm text-title">{city}</p>}
                    </div>
                  </div>
                  <div className="space-y-1 flex flex-col flex-1">
                    <h3 className="text-xl font-semibold flex w-full">
                      {jobTitle || "Job Title"}
                    </h3>
                    {description && (
                      <p className="text-text text-base">{description}</p>
                    )}
                  </div>
                </div>
                {(index + 1) % 3 === 0 && index !== data.length - 1 && (
                  <div className="page-break" />
                )}
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
};

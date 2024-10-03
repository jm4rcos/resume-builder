import { IExperience } from "@/interfaces";
import { format } from "date-fns";
import { Fragment } from "react";

export const ExperienceItem = ({ data }: { data: IExperience[] }) => {
  return (
    <div className="flex gap-6 w-full">
      {data.length &&
        data.map((item, index) => {
          const { employer, city, jobTitle, description, startDate, endDate } =
            item;
          return (
            <Fragment key={index}>
              <div className="space-y-4 w-1/3">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center space-x-1 text-xs">
                    <p className="text-title">
                      {format(startDate, "MM/yyyy") || "Start Date"}
                    </p>
                    {endDate && (
                      <p className="text-xs text-title">
                        - {format(endDate, "MM/yyyy") || "End Date"}
                      </p>
                    )}
                  </div>
                  <p className="text-sm text-title font-semibold">
                    {employer || "Institution"}
                  </p>
                  {city && (
                    <p className="text-sm text-title">{city || "City"}</p>
                  )}
                </div>
              </div>
              <div className="space-y-1 flex flex-col flex-1">
                <h3 className="text-xl font-semibold flex w-full">
                  {jobTitle || "Job Title"}
                </h3>
                <p className="text-text text-base">
                  {description ||
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "}
                </p>
              </div>
            </Fragment>
          );
        })}
    </div>
  );
};

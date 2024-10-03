import { Separator } from "@/components/ui/separator";
import { IEducation } from "@/interfaces";
import { format } from "date-fns";

export const Education = ({
  degree,
  institution,
  startDate,
  endDate,
}: IEducation) => {
  return (
    <div className="mt-10 space-y-3 flex flex-col">
      <h3 className="text-xl font-semibold">Education</h3>

      <Separator className="w-10 py-0.5 bg-link" />

      <div>
        <div className="flex items-center space-x-1 text-sm">
          <p className="text-title">
            {format(startDate, "MM/yyyy") || "Start Date"}
          </p>
          <Separator className="w-1 text-title" />
          {endDate && (
            <p className="text-sm text-title">
              {format(endDate, "MM/yyyy") || "End Date"}
            </p>
          )}
        </div>
        <p className="text-sm text-title">{institution || "Institution"}</p>
        <p className="text-sm text-title">{degree || "Degree"}</p>
      </div>
    </div>
  );
};

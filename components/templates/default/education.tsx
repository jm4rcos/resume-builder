import { Separator } from "@/components/ui/separator";
import { IEducation } from "@/interfaces";
import { format } from "date-fns";

export const Education = ({ degree, institution, endDate }: IEducation) => {
  console.log(endDate);

  return (
    <div className="mt-10 space-y-3 flex flex-col">
      <h3 className="text-xl font-semibold">Education</h3>

      <Separator className="w-10 py-0.5 bg-link" />

      <div>
        {endDate && (
          <p className="text-sm text-text">{format(endDate, "dd/MM/yyyy")}</p>
        )}
        <p className="text-sm text-text">{institution || "Institution"}</p>
        <p className="text-sm font-semibold text-text">{degree || "Degree"}</p>
      </div>
    </div>
  );
};

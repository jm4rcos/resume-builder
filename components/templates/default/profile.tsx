import { Separator } from "@/components/ui/separator";
import { IPersonalInfo } from "@/interfaces";

export const Profile = ({ summary }: IPersonalInfo) => {
  if (!summary) {
    return null;
  }
  return (
    <div className="mt-10 w-full space-y-2 flex flex-col">
      <h3 className="text-xl font-semibold">Profile</h3>

      <Separator className="w-10 py-0.5 bg-link" />

      <div className="flex w-full flex-col gap-2">
        <p className="text-title">{summary}</p>
      </div>
    </div>
  );
};

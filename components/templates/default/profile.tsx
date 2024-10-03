import { Separator } from "@/components/ui/separator";
import { IPersonalInfo } from "@/interfaces";

export const Profile = ({ summary }: IPersonalInfo) => {
  return (
    <div className="mt-10 space-y-2 flex flex-col">
      <h3 className="text-xl font-semibold">Profile</h3>

      <Separator className="w-10 py-0.5 bg-link" />

      <div className="flex flex-col gap-2">
        <p className="text-title">
          {summary ||
            "lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}
        </p>
      </div>
    </div>
  );
};

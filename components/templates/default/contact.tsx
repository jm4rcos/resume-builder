import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { IPersonalInfo } from "@/interfaces";

export const Contact = ({ phone, email }: IPersonalInfo) => {
  return (
    <div className="mt-10 space-y-3 flex flex-col">
      <h3 className="text-xl font-semibold">Contact</h3>

      <Separator className="w-10 py-0.5 bg-link" />

      <div className="flex flex-col gap-2">
        <div>
          <Label>Phone</Label>
          <p className="text-title">{phone || "00 000000000"}</p>
        </div>
        <div>
          <Label>Email</Label>
          <p className="text-title">{email || "email@example.com"}</p>
        </div>
      </div>
    </div>
  );
};

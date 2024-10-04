import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { IPersonalInfo } from "@/interfaces";

export const Contact = ({ phone, email }: IPersonalInfo) => {
  return (
    <div className="mt-10 space-y-3 flex flex-col">
      <h3 className="text-xl font-semibold">Contact</h3>

      <Separator className="w-10 py-0.5 bg-link" />

      <div className="flex flex-col gap-2">
        {phone && (
          <div>
            <Label>Phone</Label>
            <p className="text-title">{phone || "00 000000000"}</p>
          </div>
        )}
        <div>
          <Label className="font-semibold">Email</Label>
          <p className="text-text">{email || "email@example.com"}</p>
        </div>
      </div>
    </div>
  );
};

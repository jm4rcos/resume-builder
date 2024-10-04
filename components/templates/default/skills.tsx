import React from "react";
import { Separator } from "@/components/ui/separator";

interface SkillsProps {
  data: {
    name: string;
  }[];
}

export const Skills: React.FC<SkillsProps> = ({ data }) => {
  return (
    <div className="w-full space-y-3 flex flex-col">
      <h3 className="text-xl font-semibold">Skills</h3>
      <Separator className="w-10 py-0.5 bg-link" />
      {data &&
        data.map((item, index) => {
          const { name } = item;
          return (
            <React.Fragment key={index}>
              <p className="text-sm">{name}</p>
              {(index + 1) % 3 === 0 && index !== data.length - 1 && (
                <div className="page-break" />
              )}
            </React.Fragment>
          );
        })}
    </div>
  );
};

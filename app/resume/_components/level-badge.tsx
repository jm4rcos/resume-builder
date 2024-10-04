import React from "react";
import { BronzeMedalIcon } from "@/components/icons/bronze-medal-icon";
import { GoldMedalIcon } from "@/components/icons/gold-medal-icon";
import { SilverMedalIcon } from "@/components/icons/silver-medal-icon";

type ProfileLevel = "Gold" | "Silver" | "Bronze";

interface LevelBadgeProps {
  profileLevel: ProfileLevel | string;
  overallFeedback: string;
}

const levelConfig = {
  Gold: { Icon: GoldMedalIcon, bgColor: "bg-[#469AD9]" },
  Silver: { Icon: SilverMedalIcon, bgColor: "bg-[#1BBC6F]" },
  Bronze: { Icon: BronzeMedalIcon, bgColor: "bg-[#FF4C4C]" },
};

export const LevelBadge: React.FC<LevelBadgeProps> = ({
  profileLevel,
  overallFeedback,
}) => {
  const config = levelConfig[profileLevel as ProfileLevel];

  if (config) {
    const { Icon, bgColor } = config;
    return (
      <div className="flex gap-4 w-full flex-col justify-center">
        <div
          className={`flex relative items-center rounded-lg justify-center p-4 ${bgColor}`}
        >
          <Icon />
          <div className="ml-4 w-full">
            <h3 className="text-lg text-white font-semibold">{profileLevel}</h3>
            <p className="text-white text-sm">{overallFeedback}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-4 w-full flex-col justify-center">
      <h3 className="text-lg text-center text-title font-semibold">
        <span className="text-text text-sm mr-2">Profile Level:</span>
        {profileLevel}
      </h3>
      <p className="text-title text-sm italic text-center">{overallFeedback}</p>
    </div>
  );
};

export default LevelBadge;

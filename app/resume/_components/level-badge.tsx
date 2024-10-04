import { BronzeMedalIcon } from "@/components/icons/bronze-medal-icon";
import { GoldMedalIcon } from "@/components/icons/gold-medal-icon";
import { SilverMedalIcon } from "@/components/icons/silver-medal-icon";

interface LevelBadgeProps {
  profileLevel: string;
  overallFeedback: string;
}

export const LevelBadge = ({
  profileLevel,
  overallFeedback,
}: LevelBadgeProps) => {
  if (profileLevel === "Gold") {
    return (
      <div className="flex gap-4 w-full flex-col justify-center">
        <div className="flex relative items-center rounded-lg justify-center p-4 bg-[#469AD9]">
          <GoldMedalIcon />
          <div className="ml-4 w-full">
            <h3 className="text-lg text-white font-semibold">{profileLevel}</h3>
            <p className="text-white text-sm">{overallFeedback}</p>
          </div>
        </div>
      </div>
    );
  }

  if (profileLevel === "Silver") {
    return (
      <div className="flex gap-4 w-full flex-col justify-center">
        <div className="flex relative items-center rounded-lg justify-center p-4 bg-[#1BBC6F]">
          <SilverMedalIcon />
          <div className="ml-4 w-full">
            <h3 className="text-lg text-white font-semibold">{profileLevel}</h3>
            <p className="text-white text-sm">{overallFeedback}</p>
          </div>
        </div>
      </div>
    );
  }
  if (profileLevel === "Bronze") {
    return (
      <div className="flex gap-4 w-full flex-col justify-center">
        <div className="flex relative items-center rounded-lg justify-center p-4 bg-[#FF4C4C]">
          <BronzeMedalIcon />
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

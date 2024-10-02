"use client";

import { useScaleStore } from "@/store/use-scale-store";
import { Redo2Icon, Undo2Icon, ZoomInIcon, ZoomOutIcon } from "lucide-react";

export const NavbarPreviewOptions = () => {
  const { zoomIn, zoomOut, scale } = useScaleStore();

  return (
    <div className="flex items-center text-text gap-6">
      <div className="flex items-center gap-2">
        <Undo2Icon className="w-5 h-5 text-title cursor-pointer" />
        <Redo2Icon className="w-5 h-5 cursor-not-allowed" />
      </div>
      <div className="flex items-center gap-2">
        <ZoomOutIcon onClick={zoomOut} className="w-5 h-5 cursor-zoom-out" />
        <p className="cursor-default selection:bg-background selection:text-text">
          {Math.round(scale * 100)}%
        </p>
        <ZoomInIcon onClick={zoomIn} className="w-5 h-5 cursor-zoom-in" />
      </div>
    </div>
  );
};

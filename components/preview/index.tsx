"use client";

import { useScaleStore } from "@/store/use-scale-store";

export const Preview = () => {
  const { scale } = useScaleStore();
  return (
    <div
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "top center",
        width: "210mm",
        height: "297mm",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
      className="flex bg-background p-4 gap-4 h-full"
    >
      <div className="flex flex-col opacity-40 w-full h-full">
        <h1>Preview</h1>
      </div>
    </div>
  );
};

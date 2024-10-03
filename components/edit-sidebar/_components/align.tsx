import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from "lucide-react";

export const Align = () => {
  return (
    <Tabs
      defaultValue="align-left"
      className="w-full flex flex-col items-center gap-2"
    >
      <TabsContent
        className="font-semibold text-start text-xs"
        value="align-left"
      >
        Align Left
      </TabsContent>
      <TabsContent className="font-semibold text-xs" value="align-center">
        Align Center
      </TabsContent>
      <TabsContent className="font-semibold text-xs" value="align-right">
        Align Right
      </TabsContent>
      <TabsList className="w-auto p-2 space-x-4">
        <TabsTrigger value="align-left">
          <AlignLeftIcon />
        </TabsTrigger>
        <TabsTrigger value="align-center">
          <AlignCenterIcon />
        </TabsTrigger>
        <TabsTrigger value="align-right">
          <AlignRightIcon />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

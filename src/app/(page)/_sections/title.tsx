import { cn } from "@/lib/utils";
import { Yeon_Sung } from "next/font/google";

const Yeon = Yeon_Sung({ weight: "400", subsets: ["latin"], display: "swap" });

export const TitleComponent = ({
  title1,
  title2,
}: {
  title1: string;
  title2: string;
}) => {
  return (
    <div className={cn("flex flex-wrap items-end gap-3", Yeon.className)}>
      <span className="text-xl">{title1}</span>
      <span className="text-4xl">{title2}</span>
    </div>
  );
};

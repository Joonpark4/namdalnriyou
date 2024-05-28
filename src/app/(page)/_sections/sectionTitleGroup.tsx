"use client";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const SectionTitleGroupComponent = ({
  title1,
  title2,
}: {
  title1: string;
  title2: string;
}) => {
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "p-1 gap-1",
        pathname === "/day"
          ? "bg-[#262626] text-[#dadbd2]"
          : "bg-[#f6f6e8] text-[#291e14]",
      )}
    >
      <h2 className={cn("w-full text-center text-2xl font-bold")}>{title1}</h2>
      <h3 className="w-full text-center">{title2}</h3>
    </div>
  );
};

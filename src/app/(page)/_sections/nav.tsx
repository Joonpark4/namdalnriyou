"use client";
import { cn } from "@/lib/utils";
import { Yeon_Sung } from "next/font/google";
import { useLayoutEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const Yeon = Yeon_Sung({ weight: "400", subsets: ["latin"], display: "swap" });

export const NavigationComponent = ({
  title1,
  title2,
  hiddenName,
}: {
  title1: string;
  title2: string;
  hiddenName: string;
}) => {
  const [isDaySelected, setIsDaySelected] = useState<boolean | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  useLayoutEffect(() => {
    if (pathname === "/day") {
      setIsDaySelected(true);
    } else if (pathname === "/night") {
      setIsDaySelected(false);
    }
  }, [pathname]);

  const handleDayClick = () => {
    if (pathname === "/day") return;
    setIsDaySelected(true);
    router.push("/day");
  };
  const handleNightClick = () => {
    if (pathname === "/night") return;
    setIsDaySelected(false);
    router.push("/night");
  };
  return (
    <div className={cn("sticky top-0 flex w-full flex-col", Yeon.className)}>
      <nav
        className={cn(
          "z-20 flex items-start",
          pathname === "/day" ? " bg-[#f6f6e8]" : "bg-[#262626]",
        )}
      >
        <button
          className={cn(
            "centered h-full w-full origin-top-left rounded-b-lg bg-[#f6f6e8] p-1 text-[#291e14] shadow-md",
            pathname === "/day" ? "z-30 scale-110 text-3xl" : "text-2xl",
          )}
          onClick={handleDayClick}
        >
          낮에는
        </button>
        <button
          className={cn(
            "centered h-full w-full origin-top-right rounded-b-lg bg-[#696969] p-1 text-[#dadbd2] shadow-md",
            pathname === "/night" ? "z-30 scale-110 text-3xl" : "text-2xl",
          )}
          onClick={handleNightClick}
        >
          밤에는
        </button>
      </nav>
      <div
        className={cn(
          "flex w-full flex-wrap items-end justify-center gap-3 py-4",
          pathname === "/day"
            ? "bg-[#f6f6e8] text-[#291e14]"
            : "bg-[#262626] text-[#dadbd2]",
          Yeon.className,
        )}
      >
        <span className="text-xl">{title1}</span>
        <span className="text-4xl">{title2}</span>
        <h1 className=" h-0 w-0 overflow-hidden">{hiddenName}</h1>
      </div>
    </div>
  );
};

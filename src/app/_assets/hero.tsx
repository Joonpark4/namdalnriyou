"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import dayLogo from "@/../public/logo1.png";
import nightLogo from "@/../public/logo2.png";
import { useInView, stagger, animate, useScroll } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Yeon_Sung } from "next/font/google";
import { sendGTMEvent } from "@next/third-parties/google";

const Yeon = Yeon_Sung({ weight: "400", subsets: ["latin"], display: "swap" });

export const dayButtonArray = [
  "공간",
  "커피",
  "마카롱",
  "지역 상생",
  "SNS",
  "찾아오시는 길",
];

export const nightButtonArray = [
  "와인",
  "수제 맥주",
  "식사/안주",
  "지역 상생",
  "SNS",
  "찾아오시는 길",
];

export const HeroComponent = () => {
  const pathname = usePathname();
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref);

  const scrollToSection = (section: number) => {
    const target = document.getElementById(`${section}`);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isInView) {
      animate(
        ".logoImage",
        { y: [20, 0], opacity: [0, 1] },
        { delay: 0.2, duration: 0.6 },
      );
      animate(
        ".heroButton",
        { y: [20, 0], opacity: [0, 1] },
        { delay: stagger(0.1, { startDelay: 0.4 }), duration: 0.6 },
      );
    } else {
      animate(".logoImage", { y: 20, opacity: 0 }, { duration: 0.6 });
      animate(".heroButton", { y: 20, opacity: 0 }, { duration: 0.6 });
    }
  }, [isInView, pathname]);

  return (
    <div className="grid h-[85dvh] w-full grid-cols-2 text-4xl">
      <div className="topCheck absolute top-0 h-5 w-full" ref={ref}></div>
      <div className=" centered col-span-2 p-6 sm:p-10 md:col-span-1 md:p-24">
        <Image
          src={pathname === "/night" ? nightLogo : dayLogo}
          alt="logo"
          className="logoImage max-h-[400px] max-w-[400px] rounded-full "
          style={{ opacity: 0 }}
        />
      </div>
      <div className="hidden md:centered">
        <div
          className={cn(
            "centered max-w-[90%] flex-wrap gap-5 md:max-w-[70%]",
            Yeon.className,
            pathname === "/night"
              ? "*:bg-[#262626] *:text-[#dadbd2]"
              : "*:bg-[#f6f6e8] *:text-[#2a1e14]",
          )}
        >
          {pathname === "/night"
            ? nightButtonArray.map((button, index) => (
                <Button
                  key={index}
                  variant={"secondary"}
                  className={cn(
                    "heroButton px-4 py-6 text-2xl hover:bg-[#f6f6e8] hover:text-[#2a1e14] xl:text-3xl btn",
                    !isInView && "pointer-events-none",
                  )}
                  style={{ opacity: 0 }}
                  onClick={() => {
                    scrollToSection(index + 1);
                    sendGTMEvent({
                      event: "click_btn",
                      btn_name: `Night${button}Btn`,
                    });
                  }}
                >
                  {button}
                </Button>
              ))
            : dayButtonArray.map((button, index) => (
                <Button
                  key={index}
                  variant={"secondary"}
                  className={cn(
                    "heroButton px-4 py-6 text-2xl hover:bg-[#262626] hover:text-[#dadbd2] xl:text-3xl btn",
                    !isInView && "pointer-events-none",
                  )}
                  style={{ opacity: 0 }}
                  onClick={() => {
                    scrollToSection(index + 1);
                    sendGTMEvent({
                      event: "click_btn",
                      btn_name: `Day${button}Btn`,
                    });
                  }}
                >
                  {button}
                </Button>
              ))}
        </div>
      </div>
    </div>
  );
};

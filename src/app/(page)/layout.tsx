"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import dayLogo from "@/../public/logo1.png";
import nightLogo from "@/../public/logo2.png";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { animate, stagger, useInView } from "framer-motion";
import { NavigationComponent } from "./_sections/nav";
import { dayButtonArray, nightButtonArray } from "@/app/_assets/hero";
import { Yeon_Sung } from "next/font/google";
import { sendGTMEvent } from "@next/third-parties/google";

const Yeon = Yeon_Sung({ weight: "400", subsets: ["latin"], display: "swap" });

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const ref = useRef(null);
  const isInView = useInView(ref);

  const scrollToSection = (section: number) => {
    const target = document.getElementById(`${section}`);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isInView) {
      animate(
        ".SubLogo",
        { y: [20, 0], opacity: [0, 1] },
        { delay: 0.2, duration: 0.6 },
      );
      animate(
        ".SubButton",
        { y: [20, 0], opacity: [0, 1] },
        { delay: stagger(0.1, { startDelay: 0.4 }), duration: 0.6 },
      );
    } else {
      animate(".SubLogo", { y: 20, opacity: 0 }, { duration: 0.6 });
      animate(".SubButton", { y: 20, opacity: 0 }, { duration: 0.6 });
    }
  }, [isInView, pathname]);

  return (
    <div className="relative z-10 h-full">
      <div className="absolute top-0 h-full">
        <div className="h-[70vh]"></div>
        <div
          className="SubLogoCheck sticky left-0 top-0 h-1 w-2"
          ref={ref}
        ></div>
      </div>
      <div
        className={cn(
          "centered fixed left-0 top-1/4 z-20 w-[50%] flex-col gap-6",
          pathname === "/night" ? "left-auto right-0" : "",
          !isInView && "pointer-events-none",
        )}
      >
        <Image
          src={pathname === "/night" ? nightLogo : dayLogo}
          alt="logo"
          className="SubLogo hidden aspect-square w-3/5 max-w-[320px] rounded-full md:block"
          style={{ opacity: 0 }}
        />
        <div className="flex gap-4">
          {pathname === "/night"
            ? nightButtonArray.map((button, index) => (
                <button
                  key={index}
                  className={cn(
                    "SubButton centered hidden bg-[#262626] px-1 py-5 text-lg text-[#dadbd2] shadow-md writing-mode-vertical-lr clip-sub-menu hover:bg-[#f6f6e8] hover:text-[#291e14]",
                    pathname === "/night" ? "md:block" : "",
                    Yeon.className,
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
                </button>
              ))
            : dayButtonArray.map((button, index) => (
                <button
                  key={index}
                  className={cn(
                    "SubButton centered  hidden bg-[#f6f6e8] px-1 py-5 text-lg text-[#291e14] shadow-md writing-mode-vertical-lr clip-sub-menu hover:bg-[#262626] hover:text-[#dadbd2]",
                    pathname === "/day" ? "md:block" : "",
                    Yeon.className,
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
                </button>
              ))}
        </div>
      </div>
      <main
        className={cn(
          "w-[90%] translate-x-[5%] tracking-[-0.01em] duration-1000 md:w-[49%]",
          pathname === "/night"
            ? "md:translate-x-[5%]"
            : "md:translate-x-[95%]",
        )}
      >
        <NavigationComponent
          title1={
            pathname === "/night"
              ? "교외의 따뜻한 조명 아래,"
              : "푸른 산과 강이 만나는 곳에,"
          }
          title2={pathname === "/night" ? "와인 바" : "디저트 카페"}
          hiddenName={
            pathname === "/night"
              ? "이유 없는 밤 - The Night without Riyou"
              : "남다른 이유 - Namdalnriyou"
          }
        />
        {children}
      </main>
    </div>
  );
}

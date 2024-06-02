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

const Yeon = Yeon_Sung({ weight: "400", subsets: ["latin"], display: "swap" });

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const ref = useRef(null);
  const isInView = useInView(ref);

  // route가 변경될 경우 스크롤 위치를 맨 위로 부드럽게 이동
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, [pathname]);

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
          pathname === "/day" ? " " : " left-auto right-0",
          !isInView && "pointer-events-none",
        )}
      >
        <Image
          src={pathname === "/day" ? dayLogo : nightLogo}
          alt="logo"
          className="SubLogo hidden aspect-square w-3/5 max-w-[500px] rounded-full md:block"
          style={{ opacity: 0 }}
        />
        <div className="flex gap-4">
          {pathname === "/day"
            ? dayButtonArray.map((button, index) => (
                <button
                  key={index}
                  className={cn(
                    "SubButton writing-mode-vertical-lr  clip-sub-menu centered hidden bg-[#f6f6e8] px-1 py-5 text-lg text-[#291e14] shadow-md hover:bg-[#262626] hover:text-[#dadbd2]",
                    pathname === "/day" ? "md:block" : "",
                    Yeon.className,
                    !isInView && "pointer-events-none",
                  )}
                  style={{ opacity: 0 }}
                  onClick={() => {
                    scrollToSection(index + 1);
                  }}
                >
                  {button}
                </button>
              ))
            : nightButtonArray.map((button, index) => (
                <button
                  key={index}
                  className={cn(
                    "SubButton writing-mode-vertical-lr clip-sub-menu centered hidden bg-[#262626] px-1 py-5 text-lg text-[#dadbd2] shadow-md hover:bg-[#f6f6e8] hover:text-[#291e14]",
                    pathname === "/night" ? "md:block" : "",
                    Yeon.className,
                    !isInView && "pointer-events-none",
                  )}
                  style={{ opacity: 0 }}
                  onClick={() => scrollToSection(index + 1)}
                >
                  {button}
                </button>
              ))}
        </div>
      </div>
      <main
        className={cn(
          "w-[90%] translate-x-[5%] tracking-[-0.01em] duration-1000 md:w-[49%]",
          pathname === "/day" ? "md:translate-x-[95%]" : "md:translate-x-[5%]",
        )}
      >
        <NavigationComponent
          title1={
            pathname === "/day"
              ? "푸른 산과 강이 만나는 곳에,"
              : "교외의 따뜻한 조명 아래,"
          }
          title2={pathname === "/day" ? "디저트 카페" : "와인 바"}
          hiddenName={
            pathname === "/day"
              ? "남다른 이유 - Namdalnriyou"
              : "이유 없는 밤 - The Night without Riyou"
          }
        />
        {children}
      </main>
    </div>
  );
}

// pathname === "/day"
//   ? "bg-[#f6f6e8]/[.96] md:translate-x-[95%]"
//   : "bg-[#262626]/[.96] md:translate-x-[5%]",

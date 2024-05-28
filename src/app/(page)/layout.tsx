"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import dayLogo from "@/../public/logo1.png";
import nightLogo from "@/../public/logo2.png";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { animate, stagger, useInView } from "framer-motion";
import { NavigationComponent } from "./_sections/nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const ref = useRef(null);
  const isInView = useInView(ref);

  // route가 변경될 경우 스크롤 위치를 맨 위로 부드럽게 이동
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, [pathname]);

  useEffect(() => {
    if (isInView) {
      animate(
        ".SubLogo",
        { y: [20, 0], opacity: [0, 1] },
        { delay: 0.2, duration: 0.6 },
      );
      // animate(
      //   "button",
      //   { y: [20, 0], opacity: [0, 1] },
      //   { delay: stagger(0.1, { startDelay: 0.4 }), duration: 0.6 },
      // );
    } else {
      animate(".SubLogo", { y: 20, opacity: 0 }, { duration: 0.6 });
      // animate("button", { y: 20, opacity: 0 }, { duration: 0.6 });
    }
  }, [isInView, pathname]);

  return (
    <div className="relative z-10 h-full">
      <div className="absolute top-0">
        <div className="h-[70vh]"></div>
        <div
          className="SubLogoCheck sticky left-0 top-0 h-1 w-2"
          ref={ref}
        ></div>
      </div>
      <div
        className={cn(
          "centered fixed top-1/4 z-20 w-[45%]",
          pathname === "/day" ? " " : "right-0",
        )}
      >
        <Image
          src={pathname === "/day" ? dayLogo : nightLogo}
          alt="logo"
          className="SubLogo hidden w-2/4 rounded-full md:block"
          style={{ opacity: 0 }}
        />
      </div>
      <main
        className={cn(
          "w-[90%] translate-x-[5%] duration-1000 md:w-[50%]",
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

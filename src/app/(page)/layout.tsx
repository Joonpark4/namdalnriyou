"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import dayLogo from "@/../public/logo1.png";
import nightLogo from "@/../public/logo2.png";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { animate, stagger, useInView } from "framer-motion";
import { TitleComponent } from "./_sections/title";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const ref = useRef(null);
  const isInView = useInView(ref);
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
      <div className="SubLogoCheck absolute top-[85%] left-0 w-1 h-full" ref={ref}></div>
      <div className="centered fixed w-[45%] top-1/4 z-20">
        <Image
          src={pathname === "/day" ? dayLogo : nightLogo}
          alt="logo"
          className="SubLogo rounded-full w-2/4 hidden md:block"
        />
      </div>
      <main
        className={cn(
          "min-h-[200%] w-[90%] translate-x-[5%] rounded-lg p-10 pt-5 duration-1000 md:w-[50%]",
          pathname === "/day"
            ? "bg-[#f6f6e8]/[.96] md:translate-x-[95%]"
            : "bg-[#262626]/[.96] md:translate-x-[5%]",
        )}
      >
      <TitleComponent
        title1="푸른 산과 강이 만나는 곳에,"
        title2="디저트 카페"
      />
        {children}
      </main>
    </div>
  );
}

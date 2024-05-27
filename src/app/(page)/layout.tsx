"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import dayLogo from "@/../public/logo1.png";
import nightLogo from "@/../public/logo2.png";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative z-10 h-full">
      <div className="absolute top-0 left-0">
        <Image
          src={pathname === "/day" ? dayLogo : nightLogo}
          alt="logo"
          layout="fill"
          objectFit="contain"
          className="logoImage"
        />
      </div>
      <main
        className={cn(
          "min-h-[200%] w-[90%] translate-x-[5%] rounded-lg p-10 duration-1000 md:w-[50%]",
          pathname === "/day"
            ? "bg-[#f6f6e8]/[.96] md:translate-x-[95%]"
            : "bg-[#262626]/[.96] md:translate-x-[5%]",
        )}
      >
        {children}
      </main>
    </div>
  );
}

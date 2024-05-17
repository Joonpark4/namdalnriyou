"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NamdalnriyouTab } from "./tabs/namdalnriyou-tab";
import { NightWithoutRiyou } from "./tabs/night-without-riyou";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const menuList = [
    { label: "Day", to: "/" },
    { label: "Night", to: "/night" },
  ];

  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  return (
    <header className="">
      <Tabs defaultValue="day" className="centered p-2">
        <TabsList className="grid h-fit w-full grid-cols-2 gap-2 bg-slate-800">
          <TabsTrigger
            value="day"
            onClick={() => {
              setTheme("light");
              router.push("/");
            }}
          >
            <NamdalnriyouTab />
          </TabsTrigger>
          <TabsTrigger
            value="night"
            onClick={() => {
              setTheme("dark");
              router.push("/night");
            }}
          >
            <NightWithoutRiyou />
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </header>
  );
}

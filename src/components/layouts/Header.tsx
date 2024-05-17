"use client";

import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NamdalnriyouTab } from "./tabs/namdalnriyou-tab";
import { NightWithoutRiyou } from "./tabs/night-without-riyou";

export default function Header() {
  const menuList = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
  ];

  return (
    <header className="">
      <Tabs defaultValue="day" className="centered p-2">
        <TabsList className="grid w-full gap-2 bg-slate-800 h-fit grid-cols-2">
          <TabsTrigger value="day">
            <NamdalnriyouTab />
          </TabsTrigger>
          <TabsTrigger value="night">
            <NightWithoutRiyou />
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </header>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/../public/logo_2x.webp";
import { useInView, stagger, animate, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";
import { useEffect, useState } from "react";

const variants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1 },
};

export const HeroComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -95% 0px" });
  const { scrollY } = useScroll()
  useEffect(() => {
    if (isInView) {
      console.log(isInView);
      console.log(scrollY)
      animate(
        ".logoImage",
        { y: [40, 0], opacity: [0, 1] },
        { delay: 1, duration: 0.5 },
      );
      animate(
        "button",
        { y: [40, 0], opacity: [0, 1] },
        { delay: stagger(0.1, { startDelay: 1.3 }), duration: 0.5 },
      );
    }
  }, [isInView]);

  // animate("button", { x: 300 }, { delay: stagger(0.1) })

  return (
    <div className="grid h-[50dvh] w-full grid-cols-10 text-4xl" ref={ref}>
      <div className=" centered col-span-10 p-10 md:col-span-4 md:p-4">
        <Image
          src={logo}
          alt="logo"
          className="logoImage rounded-full"
          style={{ opacity: 0 }}
        />
      </div>
      <div className="col-span-6 hidden md:centered">
        <div className="centered max-w-[90%] flex-wrap gap-5 md:max-w-[60%]">
          <Button
            variant={"secondary"}
            className="p-4 text-xl xl:text-2xl"
            style={{ opacity: 0 }}
          >
            공간
          </Button>
          <Button
            variant={"secondary"}
            className="p-4 text-xl xl:text-2xl"
            style={{ opacity: 0 }}
          >
            커피
          </Button>
          <Button
            variant={"secondary"}
            className="p-4 text-xl xl:text-2xl"
            style={{ opacity: 0 }}
          >
            마카롱
          </Button>
          <Button
            variant={"secondary"}
            className="p-4 text-xl xl:text-2xl"
            style={{ opacity: 0 }}
          >
            케익
          </Button>
          <Button
            variant={"secondary"}
            className="p-4 text-xl xl:text-2xl"
            style={{ opacity: 0 }}
          >
            디저트
          </Button>
          <Button
            variant={"secondary"}
            className="p-4 text-xl xl:text-2xl"
            style={{ opacity: 0 }}
          >
            지역 상생
          </Button>
          <Button
            variant={"secondary"}
            className="p-4 text-xl xl:text-2xl"
            style={{ opacity: 0 }}
          >
            SNS
          </Button>
          <Button
            variant={"secondary"}
            className="p-4 text-xl xl:text-2xl"
            style={{ opacity: 0 }}
          >
            찾아 오는 길
          </Button>
        </div>
      </div>
    </div>
  );
};

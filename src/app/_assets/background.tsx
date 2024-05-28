"use client";
import Image from "next/image";
import dayPic1 from "@/../public/day1.jpeg";
import dayPic2 from "@/../public/day2.jpeg";
import dayPic3 from "@/../public/day3.jpeg";
import dayPic4 from "@/../public/day4.jpeg";
import dayPic5 from "@/../public/day5.jpeg";
import dayPic6 from "@/../public/day6.jpeg";
import dayPic7 from "@/../public/day7.jpeg";
import nightPic1 from "@/../public/night1.jpeg";
import nightPic2 from "@/../public/night2.jpeg";
import nightPic3 from "@/../public/night3.jpeg";
import nightPic4 from "@/../public/night4.jpeg";
import { useEffect, useState } from "react";
import { StaticImageData } from "next/image";
import { animate, cubicBezier } from "framer-motion";

const pictures = [
  dayPic1,
  dayPic2,
  dayPic3,
  dayPic4,
  dayPic5,
  dayPic6,
  dayPic7,
  nightPic1,
  nightPic2,
  nightPic3,
  nightPic4,
];

export const BackgroundComponent = () => {
  const [picNow, setPicNow] = useState<StaticImageData>(dayPic1);
  // 애니메이션의 재생, 정지 등 컨트롤을 위한 변수
  useEffect(() => {
    const interval = setInterval(() => {
      // 이전에 보여준 이미지는 제외
      setPicNow((prev) => {
        let newPic = pictures[Math.floor(Math.random() * pictures.length)];
        while (prev === newPic) {
          newPic = pictures[Math.floor(Math.random() * pictures.length)];
        }
        return newPic;
      });
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const random = Math.floor(Math.random() * 4);
    let ani: any;
    if (random === 0) {
      ani = animate(
        ".BGImage",
        { x: [-40, 0], y: [0], opacity: [0, 1, 0.1] },
        { duration: 15, ease: cubicBezier(0.0, 0.77, 0.67, 1.0) },
      );
    } else if (random === 1) {
      ani = animate(
        ".BGImage",
        { x: [0, -40], y: [0], opacity: [0, 1, 0.1] },
        { duration: 15, ease: cubicBezier(0.0, 0.77, 0.67, 1.0) },
      );
    } else if (random === 2) {
      ani = animate(
        ".BGImage",
        { x: [0], y: [0, -40], opacity: [0, 1, 0.1] },
        { duration: 15, ease: cubicBezier(0.0, 0.77, 0.67, 1.0) },
      );
    } else {
      ani = animate(
        ".BGImage",
        { x: [0], y: [-40, 0], opacity: [0, 1, 0.1] },
        { duration: 15, ease: cubicBezier(0.0, 0.77, 0.67, 1.0) },
      );
    }

    return () => ani.cancel();
  }, [picNow]);
  return (
    <div className="fixed left-0 top-0 z-10 h-full w-full bg-black">
      <div className="BGImage h-[110%] w-[110%]">
        <Image
          src={picNow}
          alt="day1"
          className="w-full h-full brightness-75 sepia-[0.1]"
          priority
        />
      </div>
    </div>
  );
};

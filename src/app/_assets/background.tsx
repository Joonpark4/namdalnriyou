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

export const BackgroundComponent = () => {
  const [picNow, setPicNow] = useState<StaticImageData>(dayPic1);
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
  // 5초마다 이미지 변경
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
    if (random === 0) {
      animate(
        ".BGImage",
        { x: [-50, 0], opacity: [0, 1, 0.1] },
        { duration: 15, ease: cubicBezier(0.0, 0.77, 0.67, 1.0) },
      );
    } else if (random === 1) {
      animate(
        ".BGImage",
        { x: [0, -50], opacity: [0, 1, 0.1] },
        { duration: 15, ease: cubicBezier(0.0, 0.77, 0.67, 1.0) },
      );
    } else if (random === 2) {
      animate(
        ".BGImage",
        { y: [-50, 0], opacity: [0, 1, 0.1] },
        { duration: 15, ease: cubicBezier(0.0, 0.77, 0.67, 1.0) },
      );
    } else {
      animate(
        ".BGImage",
        { y: [0, -50], opacity: [0, 1, 0.1] },
        { duration: 15, ease: cubicBezier(0.0, 0.77, 0.67, 1.0) },
      );
    }
  }, [picNow]);
  return (
    <div className="absolute left-0 top-0 z-10 h-full w-full overflow-hidden bg-black">
      <div className="BGImage h-[105%] w-[105%]">
        <Image
          src={picNow}
          alt="day1"
          layout="fill"
          objectFit="cover"
          className="sepia-[0.1] brightness-75"
        />
      </div>
    </div>
  );
};

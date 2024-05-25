"use client";
import Image from "next/image";
import dayPic1 from "@/../public/day1.jpeg";
import dayPic2 from "@/../public/day2.jpeg";
import dayPic3 from "@/../public/day3.jpeg";
import nightPic1 from "@/../public/night1.jpeg";
import nightPic3 from "@/../public/night3.jpeg";

export const BackgroundComponent = () => {
  // const Images = [dayPic1, dayPic2, dayPic3, nightPic1, nightPic3];
  return (
    <div className="absolute top-0 left-0 h-full w-full z-10">
      <Image
        src={dayPic1}
        alt="day1"
        layout="fill"
        objectFit="cover"
        className=" sepia-[0.1] brightness-75"
      />
      {/* <Image src={dayPic2} alt="day2" layout="fill" objectFit="cover" /> */}
      {/* <Image src={dayPic3} alt="day3" layout="fill" objectFit="cover" /> */}
      {/* <Image src={nightPic1} alt="night1" layout="fill" objectFit="cover" /> */}
      {/* <Image src={nightPic3} alt="night3" layout="fill" objectFit="cover" /> */}
    </div>
  );
};

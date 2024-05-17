"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

export const SwiperComponent = ({ images }: { images: any[] }) => {
  return (
    <div className="flex h-full max-h-[600px] w-full max-w-[1400px]">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {images.map((image, index) => (
          <SwiperSlide key={index} className="centered">
            <Image
              src={image}
              className="w-full object-center"
              alt="Pictures"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

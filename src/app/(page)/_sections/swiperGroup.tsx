"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { StaticImageData } from "next/image";

export const SwiperGroupComponent = ({ Images, height }: { Images: StaticImageData[], height?:number }) =>
  {
    return (
      <Swiper
        centeredSlides={false} //가운데 정렬
        slidesPerView={2} //한 슬라이드에 보여줄 갯수
        spaceBetween={0} //슬라이드간 거리
        loop={true} //슬라이드 반복 여부
        autoplay={{
          delay: 100,
          disableOnInteraction: false,
        }}
        speed={5000}
        className={`mySwiper h-[${height? height : '300'}px] w-full`}
        modules={[Autoplay]}
      >
        {Images?.map((image, index) => (
          <SwiperSlide key={index}>
            <Image src={image} alt={`the picture about ${index}`} className="h-full w-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };

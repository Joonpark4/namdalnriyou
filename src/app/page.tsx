import { SwiperComponent } from "@/components/layouts/swiper";
import Pic1 from "@/app/_assets/day1.jpeg";
import Pic2 from "@/app/_assets/day2.jpeg";
import Pic3 from "@/app/_assets/day3.jpeg";
import { Section } from "@/components/layouts/section";
import { SectionReverse } from "@/components/layouts/section-reverse";

export const metadata = {
  title: "React Main",
  description: "메인 페이지의 디스크립션입니다.",
};

export default function Home() {
  const images = [Pic1, Pic2, Pic3];
  return (
    <div className="centered mt-4 flex-col gap-5">
      <SwiperComponent images={images} />
      <Section
        image={Pic1}
        title="맛있는 커피"
        text={
          <div className=" space-y-4">
            <p>매번 정확한 계량으로 최적의 맛을 고집합니다.</p>
            <p>SCA Intermediate 공인 국제 바리스타가 직접 커피를 내립니다.</p>
            <p>로스팅 카페 Fredric의 스페셜티 커피콩만을 사용합니다.</p>
          </div>
        }
      />
      
      <SectionReverse
        image={Pic1}
        title="맛있는 디저트"
        text={
          <div className=" space-y-4">
            <p>매번 정확한 계량으로 최적의 맛을 고집합니다.</p>
          </div>
        }
      />
    </div>
  );
}

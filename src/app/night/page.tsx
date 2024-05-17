import { SwiperComponent } from "@/components/layouts/swiper";
import Pic1 from "@/app/_assets/night1.jpeg"
import Pic2 from "@/app/_assets/night3.jpeg"

export const metadata = {
  title: "이유 없는 밤 - Night Without Riyou",
  description: "분위기 좋은 남강뷰에서 수제 맥주와 와인을 즐기는 곳",
};

export default function Night() {
  const images = [Pic1, Pic2]
  return (
    <div className="centered flex-col mt-4">
      <SwiperComponent images={images} />
    </div>
  );
}

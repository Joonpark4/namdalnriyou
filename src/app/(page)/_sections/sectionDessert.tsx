import { SectionTitleGroupComponent } from "./sectionTitleGroup";
import { SwiperGroupComponent } from "./swiperGroup";
import DessertPic1 from "@/../public/dessert1.jpeg";
import DessertPic2 from "@/../public/dessert2.jpeg";
import DessertPic3 from "@/../public/dessert3.jpeg";
import DessertPic4 from "@/../public/dessert4.jpeg";

export const SectionDessertComponent = () => {
  const DessertPics = [DessertPic1, DessertPic2, DessertPic3, DessertPic4];
  return (
    <div className="flex w-full flex-col gap-5">
      <SectionTitleGroupComponent title1="산청 대표 마카롱" title2="Sancheong Macaron" />
      <div className="flex flex-col gap-4">
        <SwiperGroupComponent Images={DessertPics} height={200} />
        <div className="space-y-1">
          <h4 className="text-lg font-semibold">
            예쁘고 맛있는 마카롱
          </h4>
          <p>
          {`매일 새로 굽는 10종 이상의 다양한 마카롱은 하루에 한정된 수량만 판매하고 있습니다. 겉은 바삭하고 속은 촉촉한 '겉바속촉' 코크와 톡톡 튀는 맛의 필링으로 이루어져 있어 황홀한 식감을 선사합니다. 이를 맛보기 위해 방문하셔도 후회하지 않으시리라 자신합니다.`}
          </p>
        </div>
        <div className="space-y-1">
          <h4 className="text-lg font-semibold">
            산청 유정란의 고소함
          </h4>
          <p>
          우리 마카롱의 특별함은 산청 유정란에서 시작됩니다. 유기농으로 키운 산청 유정란만을 사용하여 더욱 깊고 고소한 맛을 느낄 수 있습니다. 이를 통해 지역 사회와 상생하며, 자연과 사람이 함께 만들어내는 건강한 맛을 전해드리고자 합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

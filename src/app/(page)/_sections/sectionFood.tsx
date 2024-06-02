import { SectionTitleGroupComponent } from "./sectionTitleGroup";
import Image from "next/image";
import foodPic1 from "@/../public/food1.jpg";
import foodPic2 from "@/../public/food2.jpg";
import foodPic3 from "@/../public/food3.jpg";
import foodPic4 from "@/../public/food4.jpg";
import { SwiperGroupComponent } from "./swiperGroup";

export const SectionFoodComponent = () => {
  const foodPics = [foodPic1, foodPic2, foodPic3, foodPic4];
  return (
    <div className="flex w-full flex-col gap-5">
      <SectionTitleGroupComponent
        title1="식사 / 안주"
        title2="Food / Snack for Dinner"
      />
      <div className="flex flex-col gap-4">
        <SwiperGroupComponent Images={foodPics} />
        <div className="grid w-full grid-cols-3 gap-4 overflow-hidden"></div>
        <div className="space-y-1">
          <h4 className="text-lg font-semibold">
            분위기 있는 저녁을 위한 식사
          </h4>
          <p>
            {`오렌지 빛 노을이 남강에 비칠 때 쯤, 우리 카페에서는 특별한 저녁 식사를 준비됩니다. 산청의 신선한 재료를 사용한 다양한 메뉴들은 특별한 날에 더욱 특별한 기억을 선사합니다. 친구, 연인과 함께 분위기 있는 저녁을 즐기러 오세요.`}
          </p>
        </div>
      </div>
    </div>
  );
};

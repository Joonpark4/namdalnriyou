import { SectionTitleGroupComponent } from "./sectionTitleGroup";
import Wine1 from "@/../public/wine1.jpg";
import Wine2 from "@/../public/wine2.jpeg";
import Wine3 from "@/../public/wine3.jpeg";
import Image from "next/image";

export const SectionWineComponent = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <SectionTitleGroupComponent
        title1="특별한 와인"
        title2="The chef's favorite wine"
      />
      <div className="flex flex-col gap-4">
        <div className="grid w-full grid-cols-3 gap-4 overflow-hidden">
          <Image
            src={Wine1}
            alt="Macaron1"
            height={200}
            className="aspect-square w-full object-fill"
          />
          <Image
            src={Wine2}
            alt="Macaron2"
            height={200}
            className="aspect-square w-full object-fill"
          />
          <Image
            src={Wine2}
            alt="Macaron3"
            height={200}
            className="aspect-square w-full object-fill"
          />
        </div>
        <div className="space-y-1">
          <h4 className="text-lg font-semibold">남달 사장님의 추천와인들</h4>
          <p>
            {`와인 애호가라면 남달 사장님의 추천 와인들을 놓칠 수 없습니다. 레드, 화이트, 로제 와인 등 다양한 종류의 와인이 준비되어 있습니다. 특히 '이유없는 밤' 식사 메뉴들에 알맞게 페어링 되는 와인들로 엄선하여 멋진 저녁 식사를 즐기실 수 있습니다.`}
          </p>
        </div>
      </div>
    </div>
  );
};

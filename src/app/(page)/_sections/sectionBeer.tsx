import { SectionTitleGroupComponent } from "./sectionTitleGroup";
import Beer1 from "@/../public/beer1.jpg";
import Beer2 from "@/../public/beer2.jpg";
import Beer3 from "@/../public/beer3.jpg";
import Image from "next/image";

export const SectionBeerComponent = () => {
  return (
    <div className="flex w-full flex-col gap-5">
      <SectionTitleGroupComponent
        title1="신선한 수제 맥주"
        title2="The Fresh Craft Beer"
      />
      <div className="flex flex-col gap-4">
        <div className="grid w-full grid-cols-3 gap-4 overflow-hidden">
          <Image
            src={Beer1}
            alt="Macaron1"
            height={200}
            className="aspect-square w-full object-fill"
          />
          <Image
            src={Beer2}
            alt="Macaron2"
            height={200}
            className="aspect-square w-full object-fill"
          />
          <Image
            src={Beer3}
            alt="Macaron3"
            height={200}
            className="aspect-square w-full object-fill"
          />
        </div>
        <div className="space-y-1">
          <h4 className="text-lg font-semibold">진짜 수제맥주</h4>
          <p>
            {`특별히 '산청 맥주'와 '끽비어'와의 협업을 통해 공수해온 최상급의 수제맥주를 선보입니다. 각 브랜드의 독창적인 레시피와 엄선된 재료로 만들어진 이 맥주들은 깊고 풍부한 맛을 자랑합니다. 산청의 자연과 끽(Geek)의 열정이 담긴 수제맥주를 통해 다양한 메뉴와 완벽한 조화를 이루는 특별한 맛을 경험해보세요. 진정한 수제맥주의 매력을 지금 바로 만나보세요.`}
          </p>
        </div>
      </div>
    </div>
  );
};

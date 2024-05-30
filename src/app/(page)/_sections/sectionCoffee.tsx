import Image from "next/image";
import { SectionTitleGroupComponent } from "./sectionTitleGroup";
import coffeePic1 from "@/../public/coffee1.jpeg";
import coffeePic2 from "@/../public/coffee2.jpeg";

export const SectionCoffeeComponent = () => {
  return (
    <div className="flex w-full flex-col gap-5 py-7">
      <SectionTitleGroupComponent
        title1="맛있는 커피"
        title2="The Tasty Coffee"
      />
      <div className="flex flex-col gap-4">
        <div className="grid max-h-[250px] w-full grid-cols-2 gap-4">
          <Image
            src={coffeePic1}
            alt="coffee"
            className="h-full w-full object-fill"
          />
          <Image
            src={coffeePic2}
            alt="coffee"
            className="h-full w-full object-fill"
          />
        </div>
        <div className="space-y-1">
          <h4 className="text-lg font-semibold">
            로스팅 카페 Fredric의 스페셜티 커피콩
          </h4>
          <p>
            우리 카페는 로스팅 카페 Fredric의 최고급 스페셜티 커피콩만을
            사용합니다. Fredric은 엄격한 기준으로 선별된 원두를 최적의 조건에서
            로스팅하여 최고의 맛을 이끌어냅니다. 이러한 스페셜티 커피콩을 사용한
            커피는 깊은 향과 풍부한 맛은 산청에서의 여정을 특별하게 만들어 줄
            것입니다.
          </p>
        </div>
        <div className="space-y-1">
          <h4 className="text-lg font-semibold">
            SCA 공인 국제 바리스타의 커피
          </h4>
          <p>
            우리 카페는 SCA(Specialty Coffee Association) 공인 국제 바리스타,
            리유(Riyou)가 직접 만들어주는 커피를 제공합니다. 각각의 커피가 지닌
            고유의 특성을 최대한 끌어내어, 매 순간 최상의 커피를 제공해드립니다.
            정교한 기술과 노하우로 완성된 맛있는 커피는 이 카페가 남다른
            이유입니다.
          </p>
        </div>
      </div>
    </div>
  );
};

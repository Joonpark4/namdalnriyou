import Image from "next/image";
import { SectionTitleGroupComponent } from "./sectionTitleGroup";
import { SwiperGroupComponent } from "./swiperGroup";
import eventPic1 from "@/../public/event1.jpeg";
import eventPic2 from "@/../public/event2.jpeg";
import eventPic3 from "@/../public/event3.png";
import eventPic4 from "@/../public/event4.jpg";

export const SectionCommunityComponent = () => {
  const EventPics = [eventPic1, eventPic2, eventPic3, eventPic4];
  return (
    <div className="flex w-full flex-col gap-5 py-9">
      <SectionTitleGroupComponent
        title1="지역 상생"
        title2="Sanchung Community"
      />
      <div className="flex flex-col gap-4">
        <SwiperGroupComponent Images={EventPics} height={250} perView={1} />
        <div className="space-y-1">
          <h4 className="text-lg font-semibold">
            지역 사회와 함께 성장하는 카페
          </h4>
          <p>
            우리 카페는 지역 주민들과의 소통과 협력을 통해 상생의 가치를
            실현하며, 다양한 프로그램과 활동의 장이 되어 산청 지역 사회와 함께
            성장합니다.
          </p>
          <p>
            이곳은 지역 학생들의 공부방, 지역 밴드를 위한 합주실, 사진전이
            열리는 전시회가 됩니다. 때로는 나눔 바자회에서 지역 주민들이 참여해
            필요 없는 물품을 나누고, 수익금은 지역 사회에 다시 환원합니다.
          </p>
        </div>
        <div className="space-y-1">
          <h4 className="text-lg font-semibold">교육 프로그램</h4>
          <p>
            우리 카페는 산청 지역의 학교 등 여러 지역단체 대상으로 특별한 베이킹
            교육 프로그램을 운영하고 있습니다. 남다른 이유 파티시에
            남달(Namdal)과 함께하는 이 프로그램은 학생들에게 새로운 기술을
            배우고, 창의력을 발휘할 수 있는 기회를 제공합니다.
          </p>
        </div>
      </div>
    </div>
  );
};

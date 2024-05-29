import { SectionTitleGroupComponent } from "./sectionTitleGroup";
import { SwiperGroupComponent } from "./swiperGroup";
import roomPic1 from "@/../public/room1.jpeg";
import roomPic2 from "@/../public/room2.jpeg";
import roomPic3 from "@/../public/room3.jpeg";
import roomPic4 from "@/../public/room4.jpeg";
import roomPic5 from "@/../public/room5.jpeg";
import roomPic6 from "@/../public/room6.jpeg";

export const SectionPlaceComponent = () => {
  const roomPics = [roomPic1, roomPic2, roomPic3, roomPic4, roomPic5, roomPic6];
  return (
    <div className="flex w-full flex-col gap-5">
      <SectionTitleGroupComponent title1="공간" title2="The Place" />
      <div className="flex flex-col gap-4">
        <SwiperGroupComponent Images={roomPics} />
        <div className="space-y-1">
          <h4 className="text-lg font-semibold">
            산청의 자연을 한껏 담은 예쁜 카페
          </h4>
          <p>
            산청의 자연을 한껏 담은 예쁜 카페 산청의 푸르른 자연과 조화롭게
            어우러진 우리 카페는 일상의 번잡함에서 벗어나 편안한 휴식을 취할 수
            있는 완벽한 장소입니다. 커피 한 잔을 즐기며 창밖으로 펼쳐지는
            아름다운 경치를 감상해보세요. 사계절 내내 변하는 자연의 모습을
            가까이서 느낄 수 있습니다.
          </p>
        </div>
        <div className="space-y-1">
          <h4 className="text-lg font-semibold">
            벚꽃 길과 함께 즐기는 남강 앞의 리버뷰
          </h4>
          <p>
            봄이면 벚꽃이 만개하는 길을 따라 걷다 보면, 어느새 강변 앞에 자리한
            우리 카페에 도착하게 됩니다. 카페 내부에서도 남강을 한눈에 내려다볼
            수 있는 환상적인 리버뷰를 자랑합니다. 산들바람을 맞으며 벚꽃과 함께
            즐기는 커피 한 잔은 그 어떤 곳에서도 경험할 수 없는 특별한 순간을
            선사합니다.
          </p>
        </div>
        <div className="space-y-1">
          <h4 className="text-lg font-semibold">
            노르딕 테마의 다양한 식기와 인테리어
          </h4>
          <p>
            우리 카페는 북유럽의 감성을 담아낸 노르딕 테마로 꾸며져 있습니다.
            세련되면서도 따뜻한 분위기의 인테리어는 고객님께 아늑한 휴식 공간을
            제공합니다. 노르웨이에서 직접 공수된 색상과 디자인의 식기들은 커피와
            디저트를 더욱 특별하게 만들어줍니다. 모든 디테일 하나하나가 고객님의
            편안한 시간을 위해 준비되어 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

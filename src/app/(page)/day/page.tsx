import { SectionCoffeeComponent } from "../_sections/sectionCoffee";
import { SectionCommunityComponent } from "../_sections/sectionCommunity";
import { SectionLocationComponent } from "../_sections/sectionLocation";
import { SectionMacaronComponent } from "../_sections/sectionMacaron";
import { SectionPlaceComponent } from "../_sections/sectionPlace";
import { SectionSNSComponent } from "../_sections/sectionSNS";

export const metadata = {
  title: "남다른 이유 - Namdalnriyou",
  description: "푸른 산과 강이 만나는 곳에, 디저트 카페",
  openGraph: {
    title: "남다른 이유 - Namdalnriyou",
    description: "푸른 산과 강이 만나는 곳에, 디저트 카페",
    url: "https://www.namdalnriyou.com/day",
    siteName: "남다른 이유 - Namdalnriyou",
    images: [
      {
        url: "https://www.namdalnriyou.com/logo1.png",
        width: 600,
        height: 600,
        alt: "남다른 이유 - Namdalnriyou",
      },
    ],
    local: "ko_KR",
    type: "website",
    keyword:[
      '디저트 카페',
      '카페',
      '산청 디저트 카페',
      '산청 카페',
      '산청 데이트 코스',
      '산청 여행',
      '산청 맛집',
      '산청 코스',
      '산청 여행지',
      '남강 카페',
      '원지 카페',
      '산청 원지',
      '산청 원지 카페',
      '산청 원지 데이트',
      '산청 원지 여행',
      '산청 원지 드라이브',
      '산청 드라이브',
      '원지 카페',
      '원지 데이트',
      '원지 여행',
      '산청 맥주',
      '산청 와인',
      '산청 수제 맥주',
      '원지 수제 맥주',
    ]
  },
};

// export const metadata = {
//   title: "이유 없는 밤 - The Night without Riyou",
//   description: "분위기 좋은 남강뷰에서 수제 맥주와 와인을 즐기는 곳",
//   openGraph: {
//     title: "이유 없는 밤 - The Night without Riyou",
//     description: "분위기 좋은 남강뷰에서 수제 맥주와 와인을 즐기는 곳",
//     url: "https://www.namdalnriyou.com/night",
//     siteName: "이유 없는 밤 - The Night without Riyou",
//     images: [
//       {
//         url: "https://www.namdalnriyou.com/logo2.png",
//         width: 800,
//         height: 600,
//         alt: "이유 없는 밤 - The Night without Riyou",
//       },
//     ],
//     local: "ko_KR",
//     type: "website",
//   },
// };

export default function Home() {
  return (
    <div className="flex min-h-[100vh] -translate-y-1 flex-col items-center gap-6 bg-[#f6f6e8]/[.96] p-3 text-[#291e14] lg:p-5 xl:p-8">
      <div id="1" className="-translate-y-28"></div>
      <SectionPlaceComponent />
      <div id="2" className="-translate-y-28"></div>
      <SectionCoffeeComponent />
      <div id="3" className="-translate-y-28"></div>
      <SectionMacaronComponent />
      <div id="4" className="-translate-y-28"></div>
      <SectionCommunityComponent />
      <div id="5" className="-translate-y-28"></div>
      <SectionSNSComponent />
      <div id="6" className="-translate-y-28"></div>
      <SectionLocationComponent />
    </div>
  );
}

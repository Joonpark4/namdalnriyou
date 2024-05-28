import { SubtitleH3Component } from "../_sections/subtitleH3";
import { TitleH2Component } from "../_sections/titleH2";

export const metadata = {
  title: "남다른 이유 - Namdalnriyou",
  description: "푸른 산과 강이 만나는 곳에, 디저트 카페",
};

export default function Home() {
  return (
    <div className="flex min-h-[100vh] flex-col items-center bg-[#f6f6e8]/[.96] text-[#291e14] lg:p-5 xl:p-8">
     <div className="w-full">
      <TitleH2Component>공간</TitleH2Component>
      <SubtitleH3Component>The Place</SubtitleH3Component>
     </div>
    </div>
  );
}

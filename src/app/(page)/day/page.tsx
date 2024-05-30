import { SectionCoffeeComponent } from "../_sections/sectionCoffee";
import { SectionMacaronComponent } from "../_sections/sectionMacaron";
import { SectionPlaceComponent } from "../_sections/sectionPlace";

export const metadata = {
  title: "남다른 이유 - Namdalnriyou",
  description: "푸른 산과 강이 만나는 곳에, 디저트 카페",
};

export default function Home() {
  return (
    <div className="flex gap-12 min-h-[100vh] -translate-y-1 flex-col items-center bg-[#f6f6e8]/[.96] text-[#291e14] p-3 lg:p-5 xl:p-8">
      <SectionPlaceComponent />
      <SectionCoffeeComponent />
      <SectionMacaronComponent />
    </div>
  );
}

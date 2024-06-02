import { SectionBeerComponent } from "../_sections/sectionBeer";
import { SectionCommunityComponent } from "../_sections/sectionCommunity";
import { SectionFoodComponent } from "../_sections/sectionFood";
import { SectionLocationComponent } from "../_sections/sectionLocation";
import { SectionSNSComponent } from "../_sections/sectionSNS";
import { SectionWineComponent } from "../_sections/sectionWine";

export const metadata = {
  title: "이유 없는 밤 - The Night without Riyou",
  description: "분위기 좋은 남강뷰에서 수제 맥주와 와인을 즐기는 곳",
};

export default function Night() {
  return (
    <div className="flex min-h-[100vh] -translate-y-1 flex-col items-center gap-6 bg-[#262626]/[.96] p-3 text-[#dadbd2] lg:p-5 xl:p-8">
      <div id="1" className="-translate-y-28"></div>
      <SectionWineComponent />
      <div id="2" className="-translate-y-28"></div>
      <SectionBeerComponent />
      <div id="3" className="-translate-y-28"></div>
      <SectionFoodComponent />
      <div id="4" className="-translate-y-28"></div>
      <SectionCommunityComponent />
      <div id="5" className="-translate-y-28"></div>
      <SectionSNSComponent />
      <div id="6" className="-translate-y-28"></div>
      <SectionLocationComponent />
    </div>
  );
}

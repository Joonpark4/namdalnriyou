"use client";
import Image from "next/image";
import { SectionTitleGroupComponent } from "./sectionTitleGroup";
import snsPic1 from "@/../public/sns1.jpeg";
import snsPic2 from "@/../public/sns2.jpeg";
import snsPic3 from "@/../public/sns3.jpeg";
import snsPic4 from "@/../public/sns4.jpeg";
import snsPic5 from "@/../public/sns5.jpeg";
import snsPic6 from "@/../public/sns6.jpeg";
import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";
import { SectionButtonComponent } from "./sectionButton";

// TODO: SNS 아이콘과 함께 계정명 표시
export const SectionSNSComponent = () => {
  const snsPics = [snsPic1, snsPic2, snsPic3, snsPic4, snsPic5, snsPic6];
  return (
    <div className="flex w-full flex-col gap-5">
      <SectionTitleGroupComponent title1="SNS" title2="Instagram" />
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
          {snsPics.map((pic, index) => (
            <Image
              key={index}
              src={pic}
              alt={`sns${index + 1}`}
              className=" aspect-square"
            />
          ))}
        </div>
        <div className="flex justify-end">
          <Link
            href={"https://www.instagram.com/namdalnriyou/"}
            onClick={() =>
              sendGTMEvent({
                event: "click_btn",
                btn_name: "CheckInstagramBtn",
              })
            }
          >
            <SectionButtonComponent>인스타그램 더보기</SectionButtonComponent>
          </Link>
        </div>
      </div>
    </div>
  );
};

import { TitleComponent } from "../_sections/title";

export const metadata = {
  title: "이유 없는 밤 - Night Without Riyou",
  description: "분위기 좋은 남강뷰에서 수제 맥주와 와인을 즐기는 곳",
};

export default function Night() {
  return (
    <div className="flex flex-col items-center text-[#dadbd2]">
      <TitleComponent
        title1="교외의 따뜻한 조명 아래,"
        title2="와인 바"
      />
    </div>
  );
}

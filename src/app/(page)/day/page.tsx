import { TitleComponent } from "../_sections/title";

export const metadata = {
  title: "남다른 이유 - Namdalnriyou",
  description: "푸른 산과 강이 만나는 곳에, 디저트 카페",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center text-[#2a1e14]">
      <TitleComponent
        title1="푸른 산과 강이 만나는 곳에,"
        title2="디저트 카페"
      />
    </div>
  );
}

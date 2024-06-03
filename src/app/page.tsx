import { redirect } from "next/navigation";

export const metadata = {
  title: "남다른 이유 - Namdalnriyou",
  description: "푸른 산과 강이 만나는 곳에, 디저트 카페",
  openGraph: {
    title: "남다른 이유 - Namdalnriyou",
    description: "푸른 산과 강이 만나는 곳에, 디저트 카페",
    url: "https://www.namdalnriyou.com/",
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
    keyword: [
      "디저트 카페",
      "카페",
      "산청 디저트 카페",
      "산청 카페",
      "산청 데이트 코스",
      "산청 여행",
      "산청 맛집",
      "산청 코스",
      "산청 여행지",
      "남강 카페",
      "원지 카페",
      "산청 원지",
      "산청 원지 카페",
      "산청 원지 데이트",
      "산청 원지 여행",
      "산청 원지 드라이브",
      "산청 드라이브",
      "원지 카페",
      "원지 데이트",
      "원지 여행",
      "산청 맥주",
      "산청 와인",
      "산청 수제 맥주",
      "원지 수제 맥주",
    ],
  },
};

export default function Home() {
  redirect("/day");
}

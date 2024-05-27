import { redirect } from "next/navigation";

export const metadata = {
  title: "남다른 이유 - Namdalnriyou",
  description: "푸른 산과 강이 만나는 곳에, 디저트 카페",
};

export default function Home() {
  redirect("/day");
}

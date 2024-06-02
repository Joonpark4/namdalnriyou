import "@/styles/globals.css";
import Script from "next/script";
import { Noto_Sans_KR } from "next/font/google";
import { BackgroundComponent } from "@/app/_assets/background";
import { HeroComponent } from "./_assets/hero";

const Noto = Noto_Sans_KR({
  subsets: ["latin"],
  display: "swap",
});

declare global {
  interface Window {
    naver: any;
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${Noto.className} overflow-x-hidden`}>
        <div className="relative flex w-screen flex-col items-center">
          <BackgroundComponent />
          <div className="relative z-10 w-full max-w-[1600px]">
            <HeroComponent />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

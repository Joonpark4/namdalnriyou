import "@/styles/globals.css";
import { Noto_Sans_KR } from "next/font/google";
import { BackgroundComponent } from "@/app/_assets/background";
import { HeroComponent } from "./_assets/hero";



const Noto = Noto_Sans_KR({
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${Noto.className}`}>
        <div className="flex relative h-dvh w-screen flex-col overflow-hidden">
          <BackgroundComponent />
          <div className="relative z-10 w-full h-full overflow-y-auto">
            <HeroComponent />
            <main className="z-10 w-[90%] min-h-[200%] bg-orange-100 bg-opacity-[98%] border-2 md:w-[50%] translate-x-[5%] md:translate-x-[95%]">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}

import "@/styles/globals.css";
import { Noto_Sans_KR } from "next/font/google";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "남다른 이유 - Namdalnriyou",
  description: "푸른 산과 강이 만나는 곳에, 디저트 카페",
};

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
    <html lang="ko" className="light" style={{ colorScheme: "light" }}>
      <body className={`${Noto.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <div className="centered">
            <div className="flex min-h-dvh w-full max-w-[1440px] flex-col overflow-hidden">
              <Header />
              <main className="flex max-w-full flex-grow flex-col overflow-y-auto">
                {children}
                <Footer />
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

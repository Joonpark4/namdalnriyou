import "@/styles/globals.css";

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <div className="centered">
          <div className="flex min-h-dvh w-full max-w-[1440px] flex-col">
            <Header />
            <main className="flex max-w-full flex-grow flex-col overflow-y-auto p-5">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

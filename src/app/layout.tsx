import '@/styles/globals.css';

import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow flex max-w-full flex-col py-12 px-28">
              {children}
            </main>
            <Footer />
        </div>
      </body>
    </html>
  );
}

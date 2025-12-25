import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Cynaris Solutions",
  description: "Official website of Cynaris Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Header />

        <main className="flex-grow mx-auto w-full max-w-6xl px-6 py-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

import "./globals.css";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Background from "./components/Background";

export const metadata = {
  title: {
    default: "Cynaris Solutions",
    template: "%s | Cynaris Solutions",
  },
  description:
    "Cynaris Solutions delivers innovative, scalable, and secure technology services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 relative">
        {/* Accentured-style animated background */}
        <Background />

        <TopBar />
        <Header />

        <main className="flex-grow relative z-10">{children}</main>

        <Footer />
      </body>
    </html>
  );
}

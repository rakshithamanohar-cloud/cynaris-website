import "./globals.css";
import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
      <body className="min-h-screen bg-white text-[#050F2A]">
        <div className="flex min-h-screen flex-col">
          <TopBar />
          <Header />

          <main className="flex-grow">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}

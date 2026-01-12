import ServicesSidebar from "@/app/components/ServicesSidebar";

export default function ServicesSubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[300px_1fr] gap-14">
        {/* Sidebar */}
        <ServicesSidebar />

        {/* Page content */}
        <div>{children}</div>
      </div>
    </main>
  );
}

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Cynaris Solutions. All rights reserved.
      </div>
    </footer>
  );
}

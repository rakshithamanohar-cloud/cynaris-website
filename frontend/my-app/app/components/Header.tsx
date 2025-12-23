import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-semibold">Cynaris Solutions</h1>

        <ul className="flex gap-6 text-sm font-medium">
            <li>
                <Link href="/">Home</Link>
              </li>
            <li>
                <Link href="/about">About</Link>
              </li>
            <li>
                <Link href="/services">Services</Link>
              </li>
            <li>
                 <Link href="/contact">Contact</Link>
              </li>
         </ul>
      </nav>
    </header>
  );
}

"use client";

import Link from "next/link";

const navItems = [
  { label: "Story", href: "/story" },
  { label: "Projects", href: "/projects" },
  { label: "Beliefs", href: "/beliefs" },
  { label: "Dashboard", href: "/dashboard" }
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="section-container pt-5">
        <div className="glass-panel px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            Built<span className="text-[#E20074]">Anyway</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
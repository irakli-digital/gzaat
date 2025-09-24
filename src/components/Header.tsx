"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const primary = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/admissions", label: "Admissions" },
  { href: "/academics", label: "Academics" },
  { href: "/student-life", label: "Student Life" },
  { href: "/summer-academy", label: "Summer Academy" },
];

const utility = [
  { href: "/calendar", label: "Calendar" },
  { href: "/news", label: "News" },
  { href: "/alumni", label: "Alumni" },
  { href: "/myaat", label: "MyAAT" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  return (
    <header className="bg-white border-b border-gray-200">
      {/* Utility bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-10 text-sm text-gray-600 gap-6">
          {utility.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-red-700">
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Primary nav */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            <div className="flex items-center">
              <div className="text-2xl md:text-3xl font-bold text-red-700">
                Stanford Academy
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              {primary.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium ${
                    isActive(item.href)
                      ? "text-red-700 border-b-2 border-red-700 pb-1"
                      : "text-gray-700 hover:text-red-700"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="md:hidden">
              {/* Simple placeholder for mobile menu toggle */}
              <button className="text-gray-700" aria-label="Open menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

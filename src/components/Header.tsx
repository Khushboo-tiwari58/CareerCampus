"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // lightweight icons
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-cyan-900 via-blue-900 to-black shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white">

        {/* Logo */}
        <div className="text-3xl font-extrabold tracking-wide italic">
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg">
            <Link href="/" className="hover:text-cyan-300 transition">
              <span className="text-5xl not-italic">C</span>areer{" "}
              <span className="text-5xl not-italic">C</span>ompass
            </Link>
          </span>
        </div>


        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-lg font-semibold">
          <li>
            <Link href="/schools" className="hover:text-cyan-300 transition">
              For Students
            </Link>
          </li>
          <li>
            <Link href="/colleges" className="hover:text-cyan-300 transition">
              Colleges & Graduates
            </Link>
          </li>
          <li>
            <Link href="/resources" className="hover:text-cyan-300 transition">
              Resources
            </Link>
          </li>
          <li>
            <Link href="/vocational" className="hover:text-cyan-300 transition">
              Vocational Education
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-cyan-900 via-blue-900 to-black px-6 py-6 space-y-4 text-lg font-semibold text-white">
          <Link href="/schools" className="block hover:text-cyan-300" onClick={() => setIsOpen(false)}>For Schools</Link>
          <Link href="/colleges" className="block hover:text-cyan-300" onClick={() => setIsOpen(false)}>Colleges & Graduates</Link>
          <Link href="/resources" className="block hover:text-cyan-300" onClick={() => setIsOpen(false)}>Resources</Link>
          <Link href="/vocational" className="block hover:text-cyan-300" onClick={() => setIsOpen(false)}>Vocational Education</Link>
        </div>
      )}
    </header>
  );
}

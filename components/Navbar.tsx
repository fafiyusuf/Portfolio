"use client";

import { useState } from "react";
import Link from "next/link";

function GaraadLogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="6" fill="#5DBB18" />
      <rect x="7" y="20" width="5" height="10" rx="1" fill="white" />
      <rect x="15.5" y="13" width="5" height="17" rx="1" fill="white" />
      <rect x="24" y="7" width="5" height="23" rx="1" fill="white" />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <GaraadLogo />
          <span className="font-bold text-gray-900 text-xs leading-tight">
            Garaad
            <br />
            Systems
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm text-gray-700 hover:text-gray-900 font-medium">
            Home
          </Link>
          <Link href="#services" className="text-sm text-gray-500 hover:text-gray-900">
            Services
          </Link>
          <Link href="#about" className="text-sm text-gray-500 hover:text-gray-900">
            About
          </Link>
          <Link href="#projects" className="text-sm text-gray-500 hover:text-gray-900">
            Projects
          </Link>
        </div>

        {/* CTA */}
        <Link
          href="#contact"
          className="hidden md:inline-flex bg-[#5DBB18] text-white text-sm px-5 py-2 rounded-md font-medium hover:bg-[#4da514] transition-colors"
        >
          Get in touch
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {menuOpen ? (
              <path d="M4 4L16 16M4 16L16 4" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
          <Link href="/" className="text-sm text-gray-900 font-medium" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="#services" className="text-sm text-gray-600" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="#about" className="text-sm text-gray-600" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="#projects" className="text-sm text-gray-600" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="#contact" className="bg-[#5DBB18] text-white text-sm px-5 py-2 rounded-md font-medium text-center" onClick={() => setMenuOpen(false)}>
            Get in touch
          </Link>
        </div>
      )}
    </nav>
  );
}

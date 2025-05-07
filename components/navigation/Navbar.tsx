"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Facebook, Twitter, Linkedin, Rss } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4 px-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="font-bold text-2xl text-blue-600">
              LegalReg<span className="text-emerald-600">Scan</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="font-medium text-slate-800 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="font-medium text-slate-800 hover:text-blue-600 transition-colors">
              About us
            </Link>
            <Link href="/contact" className="font-medium text-slate-800 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Social Icons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" aria-label="Facebook" className="text-slate-600 hover:text-blue-600 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="text-slate-600 hover:text-blue-600 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-slate-600 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" aria-label="RSS" className="text-slate-600 hover:text-blue-600 transition-colors">
              <Rss size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-slate-800 hover:text-blue-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="font-medium text-slate-800 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="font-medium text-slate-800 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About us
              </Link>
              <Link 
                href="/contact" 
                className="font-medium text-slate-800 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
            
            {/* Social Icons - Mobile */}
            <div className="flex items-center space-x-4 mt-6">
              <a href="#" aria-label="Facebook" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="RSS" className="text-slate-600 hover:text-blue-600 transition-colors">
                <Rss size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
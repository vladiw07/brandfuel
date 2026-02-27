// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden md:block bg-gray-900 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-6 flex justify-end items-center space-x-6">
          <a href="tel:0889929627" className="flex items-center hover:text-blue-400 transition-colors">
            <Phone className="h-4 w-4 mr-2" />
            0889 929 627
          </a>
          <a href="mailto:brandfuel.ads@gmail.com" className="flex items-center hover:text-blue-400 transition-colors">
            <Mail className="h-4 w-4 mr-2" />
            brandfuel.ads@gmail.com
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-white/80 backdrop-blur-sm py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              href="/" 
              className="text-2xl font-bold tracking-tight group"
              onClick={handleLinkClick}
            >
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-300">
                BrandFuel
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#services">Услуги</NavLink>
              <NavLink href="#work">Работа</NavLink>
              <NavLink href="#testimonials">Клиенти</NavLink>
              <NavLink href="#contact">Контакт</NavLink>
              
              {/* CTA Button */}
              <Link
                href="#contact"
                className="relative group overflow-hidden rounded-xl bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-xl hover:scale-105"
                onClick={handleLinkClick}
              >
                <span className="relative z-10">Свържете се</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center group"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5 text-gray-600 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden absolute left-0 right-0 top-full mt-2 mx-4 transition-all duration-500 ease-in-out ${
              isOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Mobile Menu Items */}
              <div className="p-4 space-y-1">
                <MobileNavLink href="#services" onClick={handleLinkClick}>
                  Услуги
                </MobileNavLink>
                <MobileNavLink href="#work" onClick={handleLinkClick}>
                  Работа
                </MobileNavLink>
                <MobileNavLink href="#testimonials" onClick={handleLinkClick}>
                  Клиенти
                </MobileNavLink>
                <MobileNavLink href="#contact" onClick={handleLinkClick}>
                  Контакт
                </MobileNavLink>
              </div>

              {/* Mobile Contact Info */}
              <div className="bg-gray-50 p-4 space-y-3">
                <a
                  href="tel:0889929627"
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={handleLinkClick}
                >
                  <Phone className="h-4 w-4 mr-3 text-gray-400" />
                  <span>0889 929 627</span>
                </a>
                <a
                  href="mailto:brandfuel.ads@gmail.com"
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={handleLinkClick}
                >
                  <Mail className="h-4 w-4 mr-3 text-gray-400" />
                  <span>brandfuel.ads@gmail.com</span>
                </a>
              </div>

              {/* Mobile CTA */}
              <div className="p-4 bg-gradient-to-r from-gray-50 to-white border-t border-gray-100">
                <Link
                  href="#contact"
                  className="block w-full text-center bg-gray-900 text-white rounded-xl px-4 py-3 font-semibold hover:bg-gray-800 transition-colors"
                  onClick={handleLinkClick}
                >
                  Свържете се сега
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay for mobile menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden animate-fade-in"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

// Desktop Navigation Link Component
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="relative text-gray-700 hover:text-gray-900 font-medium transition-colors duration-300 group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
  </Link>
);

// Mobile Navigation Link Component
const MobileNavLink = ({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl font-medium transition-all duration-300"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, ChevronRight, Sparkles, Instagram, Facebook } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active link based on scroll position
      const sections = ["services", "work", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navItems = [
    { href: "#services", label: "Услуги" },
    { href: "#work", label: "Работа" },
    { href: "#testimonials", label: "Клиенти" },
    { href: "#contact", label: "Контакт" },
  ];

  return (
    <>
      {/* Main Navbar - Always visible with proper background */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-white/90 backdrop-blur-sm py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link 
              href="/" 
              className="relative group"
              onClick={handleLinkClick}
            >
              <div className="flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-blue-600 transition-all duration-300 group-hover:rotate-12" />
                <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-300">
                  BrandFuel
                </span>
              </div>
            </Link>

            {/* Desktop Menu - Clean version */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                    activeLink === item.href.slice(1)
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-blue-600 transition-all duration-300 ${
                    activeLink === item.href.slice(1) ? "w-8" : "w-0 group-hover:w-8"
                  }`}></span>
                </Link>
              ))}
              
              {/* CTA Button */}
              <Link
                href="#contact"
                className="ml-4 bg-gray-900 text-white px-6 py-2.5 text-sm font-semibold rounded-xl hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-md hover:shadow-xl"
                onClick={handleLinkClick}
              >
                <span className="flex items-center">
                  Свържете се
                  <ChevronRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5 text-gray-600" />
              ) : (
                <Menu className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Keeping your amazing design */}
        <div
          className={`fixed inset-0 top-0 left-0 w-full h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 z-40 transition-all duration-500 ease-in-out md:hidden ${
            isOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          <div className="relative h-full flex flex-col">
            {/* Menu Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <Link href="/" onClick={handleLinkClick} className="flex items-center">
                <Sparkles className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-2xl font-bold text-white">BrandFuel</span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 overflow-y-auto py-8 px-6">
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="group flex items-center justify-between w-full p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-all duration-300"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: isOpen ? 'slideIn 0.5s ease-out forwards' : 'none',
                      opacity: 0,
                      transform: 'translateX(20px)'
                    }}
                  >
                    <span className="text-lg font-medium text-white">{item.label}</span>
                    <ChevronRight className="h-5 w-5 text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>

              {/* Contact Info Cards */}
              <div className="mt-8 space-y-3">
                <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider px-2">
                  Свържете се с нас
                </h3>
                <a
                  href="tel:0889929627"
                  className="flex items-center p-4 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-white/10 hover:border-blue-500/50 transition-all duration-300 group"
                  onClick={handleLinkClick}
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <Phone className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Обадете се</p>
                    <p className="text-white font-semibold">0889 929 627</p>
                  </div>
                </a>
                <a
                  href="mailto:brandfuel.ads@gmail.com"
                  className="flex items-center p-4 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"
                  onClick={handleLinkClick}
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-600/20 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Пишете ни</p>
                    <p className="text-white font-semibold">brandfuel.ads@gmail.com</p>
                  </div>
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-8 flex justify-center space-x-4">
                <a href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all duration-300">
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all duration-300">
                  <Facebook className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="p-6 border-t border-white/10">
              <Link
                href="#contact"
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl px-4 py-4 font-semibold hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                onClick={handleLinkClick}
              >
                Започнете сега
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Custom animation for mobile menu items */}
      <style jsx>{`
        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
"use client"

import React from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Heart,
  ChevronRight
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer - No top border, seamless background */}
      <div className="py-16 md:py-20 bg-gray-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Company Info */}
            <div className="space-y-5">
              <div className="flex items-center group">
                <div className="relative">
                  <Sparkles className="h-7 w-7 text-blue-400 mr-3 group-hover:rotate-12 transition-transform duration-500" />
                  <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-blue-300 transition-all duration-500">
                  BrandFuel
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Агенция за дигитален маркетинг, ориентирана към резултати. Създаваме реклами и стратегии, които носят реален растеж.
              </p>
              <div className="flex space-x-3 pt-3">
                <a 
                  href="#" 
                  className="w-11 h-11 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:scale-110 hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="w-11 h-11 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:scale-110 hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-300 group"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="#" 
                  className="w-11 h-11 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:scale-110 hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-5 relative inline-block">
                Бързи връзки
                <span className="absolute -bottom-2 left-0 w-10 h-1 bg-blue-600 rounded-full"></span>
              </h3>
              <ul className="space-y-3.5">
                {[
                  { href: "#services", label: "Услуги" },
                  { href: "#work", label: "Работа" },
                  { href: "#testimonials", label: "Клиенти" },
                  { href: "#contact", label: "Контакт" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href} 
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    >
                      <ChevronRight className="h-4 w-4 mr-2 text-blue-500/50 group-hover:translate-x-1 group-hover:text-blue-400 transition-all" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-5 relative inline-block">
                Контакти
                <span className="absolute -bottom-2 left-0 w-10 h-1 bg-blue-600 rounded-full"></span>
              </h3>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="tel:0889929627" 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center mr-3 group-hover:bg-blue-600/20 transition-colors">
                      <Phone className="h-4 w-4 text-blue-400" />
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">Телефон</span>
                      <span className="text-white group-hover:text-blue-400 transition-colors">0889 929 627</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:0888928003" 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center mr-3 group-hover:bg-blue-600/20 transition-colors">
                      <Phone className="h-4 w-4 text-blue-400" />
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">Телефон</span>
                      <span className="text-white group-hover:text-blue-400 transition-colors">0888 928 003</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:brandfuel.ads@gmail.com" 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center mr-3 group-hover:bg-blue-600/20 transition-colors">
                      <Mail className="h-4 w-4 text-blue-400" />
                    </div>
                    <div>
                      <span className="block text-sm text-gray-500">Имейл</span>
                      <span className="text-white group-hover:text-blue-400 transition-colors text-sm">brandfuel.ads@gmail.com</span>
                    </div>
                  </a>
                </li>
                <li className="flex items-center text-gray-400 group">
                  <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center mr-3 group-hover:bg-blue-600/20 transition-colors">
                    <MapPin className="h-4 w-4 text-blue-400" />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500">Адрес</span>
                    <span className="text-white">София, България</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-5 relative inline-block">
                Бюлетин
                <span className="absolute -bottom-2 left-0 w-10 h-1 bg-blue-600 rounded-full"></span>
              </h3>
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                Абонирайте се за нашия бюлетин и получавайте актуални новини и оферти.
              </p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Вашият email"
                    className="w-full px-5 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  />
                </div>
                <button className="w-full group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-4 font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/25 hover:scale-[1.02]">
                  <span className="relative z-10 flex items-center justify-center">
                    Абонирайте се
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Single border, no white line */}
      <div className="border-t border-gray-800 bg-gray-900 py-6">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p className="flex items-center">
              © 2026 BrandFuel. Всички права запазени.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-blue-400 transition-colors duration-300 text-sm">
                Политика за поверителност
              </Link>
              <span className="text-gray-700 hidden md:inline">•</span>
              <Link href="#" className="hover:text-blue-400 transition-colors duration-300 text-sm">
                Общи условия
              </Link>
              <span className="text-gray-700 hidden md:inline">•</span>
              <Link href="#" className="hover:text-blue-400 transition-colors duration-300 text-sm">
                Бисквитки
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Made with love - Seamless transition */}
      <div className="bg-gray-950 py-4">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-xs text-gray-600 flex items-center justify-center">
            Създадено с 
            <Heart className="h-3.5 w-3.5 text-red-500 mx-1.5 animate-pulse" /> 
            от BrandFuel
          </p>
        </div>
      </div>
    </footer>
  );
}
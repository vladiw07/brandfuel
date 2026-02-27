// app/page.tsx - Complete polished component
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { 
  Instagram, 
  Mail, 
  Phone, 
  Users, 
  Video, 
  ArrowRight, 
  ChevronDown,
  Facebook,
  Linkedin,
  Sparkles,
  Heart,
  MapPin,
  TrendingUp,
  Camera,
  Play,
  Star
} from "lucide-react";

// Import founder images
import founder1 from "./assets/Images/founder1.png";
import founder2 from "./assets/Images/founder2.png";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 60);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-white overflow-x-hidden">
      {/* Spacer for fixed navbar */}
      <div className="h-20 md:h-24"></div>

      {/* Hero Section - Abstract & Modern */}
      <section className="relative bg-white overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating orbs */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-40 right-40 w-64 h-64 bg-yellow-100/30 rounded-full blur-3xl animate-float-slow"></div>
          
          {/* Grid pattern - FIXED */}
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M0 0h60M0 0v60' stroke='%23e5e7eb' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
            opacity: 0.2
          }}></div>
          
          {/* Animated lines */}
          <svg className="absolute top-0 right-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path d="M300 0 L400 200 L300 400 L200 200 Z" fill="url(#grad1)" className="animate-spin-slow" />
            <circle cx="80%" cy="20%" r="80" fill="none" stroke="rgba(59,130,246,0.1)" strokeWidth="2" strokeDasharray="10 10" className="animate-pulse-slow" />
            <circle cx="20%" cy="80%" r="120" fill="none" stroke="rgba(139,92,246,0.1)" strokeWidth="2" strokeDasharray="15 15" className="animate-pulse-slower" />
          </svg>
        </div>

        <div
          className={`relative mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-32 transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge with animation */}
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100/50 backdrop-blur-sm px-4 py-2 text-xs font-semibold tracking-wider text-gray-700 hover:border-blue-300 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                ДИГИТАЛНА МАРКЕТИНГ АГЕНЦИЯ
              </div>

              {/* Headline */}
              <div className="space-y-3">
                <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-bold tracking-tight leading-[1.1]">
                  <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent animate-fade-up" style={{ animationDelay: '0.1s' }}>
                    Развийте
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-up" style={{ animationDelay: '0.2s' }}>
                    бизнеса си
                  </span>
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-gray-600 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                с <span className="font-semibold text-blue-600">маркетингови стратегии</span>, които работят
              </p>

              <p className="max-w-xl text-base leading-relaxed text-gray-600 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                Агенция за дигитален маркетинг, ориентирана към резултати. 
                Създаваме реклами и стратегии, които носят клиенти и реален растеж.
              </p>

              {/* CTA */}
              <div className="pt-6 animate-fade-up" style={{ animationDelay: '0.5s' }}>
                <Link
                  href="#contact"
                  className="group relative inline-flex items-center justify-center rounded-xl bg-gray-900 px-10 py-5 text-base font-semibold text-white overflow-hidden transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-2xl"
                >
                  <span className="relative z-10 flex items-center">
                    Възползвайте се от нашите изпитани решения
                    <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-6 pt-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 border-2 border-white"></div>
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold text-gray-900">50+</span> доволни клиенти
                </p>
              </div>
            </div>

            {/* Right Side - Abstract Visual Elements */}
            <div className="relative hidden lg:block animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative aspect-square w-full">
                {/* Main floating card */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white rounded-3xl shadow-2xl p-6 animate-float-slow">
                  <div className="w-full h-full bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl"></div>
                      <div className="space-y-2">
                        <div className="w-3/4 h-4 bg-gray-200 rounded-full"></div>
                        <div className="w-1/2 h-4 bg-gray-200 rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg"></div>
                        <div className="w-8 h-8 bg-purple-100 rounded-lg"></div>
                        <div className="w-8 h-8 bg-pink-100 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating icons */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-white rounded-2xl shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '0.2s' }}>
                  <Instagram className="w-8 h-8 text-pink-500" />
                </div>
                <div className="absolute bottom-20 left-0 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '0.4s' }}>
                  <Users className="w-10 h-10 text-blue-500" />
                </div>
                <div className="absolute top-40 right-10 w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '0.6s' }}>
                  <Video className="w-7 h-7 text-purple-500" />
                </div>
                <div className="absolute bottom-0 right-20 w-24 h-24 bg-white rounded-2xl shadow-xl flex items-center justify-center animate-float" style={{ animationDelay: '0.8s' }}>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-blue-600">50+</span>
                    <span className="text-xs text-gray-500">проекта</span>
                  </div>
                </div>

                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                  <line x1="60%" y1="30%" x2="70%" y2="40%" stroke="rgba(59,130,246,0.1)" strokeWidth="2" strokeDasharray="5 5" />
                  <line x1="40%" y1="70%" x2="30%" y2="60%" stroke="rgba(139,92,246,0.1)" strokeWidth="2" strokeDasharray="5 5" />
                </svg>
              </div>

              {/* Stats cards */}
              <div className="absolute -bottom-10 -left-10 bg-white rounded-2xl shadow-xl p-4 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Ръст на ангажираност</p>
                    <p className="text-xl font-bold text-gray-900">+156%</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-10 -right-10 bg-white rounded-2xl shadow-xl p-4 animate-float" style={{ animationDelay: '0.7s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Нови клиенти</p>
                    <p className="text-xl font-bold text-gray-900">+89%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="w-10 h-16 rounded-full border-2 border-gray-300 flex justify-center">
            <div className="w-1 h-3 bg-blue-600 rounded-full mt-3 animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Partnership Statement with Founder Images */}
      <section className="relative py-28 bg-gray-50 overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.05'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM30 30c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          opacity: 0.5
        }}></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-100/20 rounded-full blur-3xl animate-pulse-slower"></div>
        
        <div className="relative mx-auto max-w-7xl px-6">
          {/* Founder Images */}
          <div className="flex justify-center items-center gap-8 md:gap-12 mb-16">
            {/* Founder 1 */}
            <div className="relative group">
              <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-white shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:ring-blue-400 group-hover:shadow-blue-500/30">
                <Image
                  src={founder1}
                  alt="Основател"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
            </div>

            {/* Founder 2 */}
            <div className="relative group">
              <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden ring-4 ring-white shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:ring-blue-400 group-hover:shadow-blue-500/30">
                <Image
                  src={founder2}
                  alt="Основател"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"></div>
            </div>
          </div>

          {/* Partnership Text */}
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-relaxed animate-fade-in">
              Ние партнираме с вас, 
              <br className="hidden sm:block" />
              за да стимулираме 
              <span className="block font-semibold text-blue-600 mt-4 text-4xl md:text-5xl lg:text-6xl">
                растежа на бизнеса.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-28 bg-white overflow-hidden">
        {/* Abstract background */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30 L30 30' stroke='%233b82f6' stroke-width='1' stroke-opacity='0.05' /%3E%3Ccircle cx='30' cy='30' r='5' fill='%233b82f6' fill-opacity='0.05' /%3E%3C/svg%3E")`,
          opacity: 0.5
        }}></div>
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Потопете се в нашите услуги
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Social Media Full Service */}
            <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-48 w-full mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center group-hover:shadow-lg transition-all duration-500">
                <div className="text-center transform transition-all duration-500 group-hover:scale-110">
                  <Users className="w-16 h-16 text-blue-300 group-hover:text-blue-400 transition-colors duration-300" />
                  <p className="text-blue-300 text-xs mt-2 font-medium">Social Media</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Users className="h-6 w-6" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Социални мрежи</h3>
              <p className="text-sm font-medium text-blue-600 mb-4">full service</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Пакет "Реклама" предлага цялостно дигитално присъствие: създаваме
                професионални видеа, постове и сторита, управляваме профилите ви.
              </p>
              <Link 
                href="#" 
                className="inline-flex items-center text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-all duration-300"
              >
                научете повече
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Instagram Management */}
            <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-pink-200 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-48 w-full mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center group-hover:shadow-lg transition-all duration-500">
                <div className="text-center transform transition-all duration-500 group-hover:scale-110">
                  <Instagram className="w-16 h-16 text-pink-300 group-hover:text-pink-400 transition-colors duration-300" />
                  <p className="text-pink-300 text-xs mt-2 font-medium">Instagram</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300">
                <Instagram className="h-6 w-6" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Инстаграм менажиране</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Пакет "Инстаграм менажиране" гарантира стилно и последователно присъствие:
                създаваме постове и сторита, подреждаме хайлайти, пиннати поста.
              </p>
              <Link 
                href="#" 
                className="inline-flex items-center text-sm font-semibold text-gray-900 group-hover:text-pink-600 transition-all duration-300"
              >
                научете повече
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Video Production */}
            <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-200 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-48 w-full mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 flex items-center justify-center group-hover:shadow-lg transition-all duration-500">
                <div className="text-center transform transition-all duration-500 group-hover:scale-110">
                  <Video className="w-16 h-16 text-purple-300 group-hover:text-purple-400 transition-colors duration-300" />
                  <p className="text-purple-300 text-xs mt-2 font-medium">Video Production</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <Video className="h-6 w-6" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Видео продукция</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Професионални видеа и реклами, които разказват вашата история и ангажират аудиторията.
              </p>
              <Link 
                href="#" 
                className="inline-flex items-center text-sm font-semibold text-gray-900 group-hover:text-purple-600 transition-all duration-300"
              >
                научете повече
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="relative py-28 bg-gray-50 overflow-hidden">
        {/* Abstract background */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L90 90 M90 10 L10 90' stroke='%233b82f6' stroke-width='1' stroke-opacity='0.05' /%3E%3C/svg%3E")`,
          opacity: 0.5
        }}></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-100/20 rounded-full blur-3xl animate-float-delayed"></div>
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Разгледайте предишната ни работа
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative aspect-[16/9] w-full bg-gradient-to-br from-amber-50 to-yellow-50 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-yellow-500/5 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="text-center transform transition-all duration-700 group-hover:scale-110">
                  <Camera className="w-24 h-24 text-amber-200 group-hover:text-amber-300 transition-colors duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              <div className="p-8">
                <p className="text-sm font-medium text-blue-600 mb-2">Документално видео</p>
                <h3 className="text-2xl font-bold text-gray-900">“Медена ферма подарява 1 тон мед”</h3>
                <div className="mt-4 flex items-center gap-2 text-gray-500 text-sm">
                  <Play className="w-4 h-4" />
                  <span>Гледай видеото</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative aspect-[16/9] w-full bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="text-center transform transition-all duration-700 group-hover:scale-110">
                  <svg className="w-24 h-24 text-blue-200 group-hover:text-blue-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              <div className="p-8">
                <p className="text-sm font-medium text-blue-600 mb-2">Проект</p>
                <h3 className="text-2xl font-bold text-gray-900">“Недвижими имоти”</h3>
                <div className="mt-4 flex items-center gap-2 text-gray-500 text-sm">
                  <Star className="w-4 h-4" />
                  <span>Featured project</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-28 bg-white overflow-hidden">
        {/* Abstract background */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 L30 50 M10 30 L50 30' stroke='%233b82f6' stroke-width='1' stroke-opacity='0.05' /%3E%3C/svg%3E")`,
          opacity: 0.3
        }}></div>
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Чуйте го от клиентите
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 mr-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Стивън Павлов</h4>
                    <p className="text-sm text-gray-500">Инфлуенсър/Рекламно лице</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 text-sm leading-relaxed italic relative">
                  <span className="absolute -top-2 -left-2 text-4xl text-gray-200">"</span>
                  <span className="relative z-10">Работата с този екип беше изключително приятна. Профилът ни вече изглежда професионално и последователно. Получаваме много повече реакции и внимание от клиентите.</span>
                </blockquote>
                <div className="mt-4 flex text-yellow-400">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 mr-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Мая Ятанска</h4>
                    <p className="text-sm text-gray-500">Трейдинг/Инфлуенсър</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 text-sm leading-relaxed italic relative">
                  <span className="absolute -top-2 -left-2 text-4xl text-gray-200">"</span>
                  <span className="relative z-10">Много сме доволни от резултатите. Управлението на профила е безупречно – всички постове са еднакви по стил. Виждаме реален ръст в ангажираността.</span>
                </blockquote>
                <div className="mt-4 flex text-yellow-400">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="group relative rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 mr-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Александър</h4>
                    <p className="text-sm text-gray-500">Продажбени фунии</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 text-sm leading-relaxed italic relative">
                  <span className="absolute -top-2 -left-2 text-4xl text-gray-200">"</span>
                  <span className="relative z-10">Екипът свърши страхотна работа. Трите пиннати поста с имена и снимки на нашия персонал добавиха личен и професионален елемент.</span>
                </blockquote>
                <div className="mt-4 flex text-yellow-400">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-28 bg-gray-900 text-white overflow-hidden">
        {/* Abstract background */}
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='%233b82f6' stroke-width='1' stroke-opacity='0.1' /%3E%3C/svg%3E")`,
          opacity: 0.3
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slower"></div>
        
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">
            Нека изведем вашата компания
            <span className="block text-blue-400 mt-3 text-5xl md:text-6xl">на следващото ниво</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto my-8 rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-12">
            {/* Phone */}
            <div className="group rounded-xl bg-gray-800/50 backdrop-blur-sm p-6 hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-700 hover:border-blue-500">
              <Phone className="h-8 w-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-lg font-semibold mb-1">0889 929 627</p>
              <p className="text-sm text-gray-400">Phone</p>
            </div>

            {/* Email */}
            <div className="group rounded-xl bg-gray-800/50 backdrop-blur-sm p-6 hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-700 hover:border-blue-500">
              <Mail className="h-8 w-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-lg font-semibold mb-1">brandfuel.ads@gmail.com</p>
              <p className="text-sm text-gray-400">Email</p>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="#"
              className="group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-12 py-5 text-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10 flex items-center">
                Свържете се!
                <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(15px); opacity: 0; }
        }
        
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-scroll {
          animation: scroll 1.5s infinite;
        }
      `}</style>
    </main>
  );
}
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Instagram, Mail, Phone, Users, Video, ArrowRight, ChevronDown } from "lucide-react";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 60);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-white overflow-x-hidden">
      {/* Hero Section - Clean & Minimal */}
      <section className="relative bg-white pt-20">
        {/* Decorative gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        
        <div
          className={`mx-auto max-w-7xl px-6 py-16 md:py-24 transition-all duration-1000 ease-out ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              {/* Badge with animation */}
              <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm px-4 py-2 text-xs font-semibold tracking-wider text-gray-700 hover:border-gray-300 transition-all duration-300 hover:scale-105">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                BRANDFUEL
              </div>

              {/* Headline with staggered animation */}
              <div className="space-y-2">
                <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight text-gray-900 leading-[1.1] animate-fade-up" style={{ animationDelay: '0.1s' }}>
                  Развийте
                </h1>
                <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold tracking-tight text-blue-600 leading-[1.1] animate-fade-up" style={{ animationDelay: '0.2s' }}>
                  бизнеса си
                </h1>
              </div>

              <p className="text-xl text-gray-500 animate-fade-up" style={{ animationDelay: '0.3s' }}>
                с маркетингови стратегии, които работят
              </p>

              <p className="max-w-xl text-base leading-relaxed text-gray-600 animate-fade-up" style={{ animationDelay: '0.4s' }}>
                Агенция за дигитален маркетинг, ориентирана към резултати. 
                Създаваме реклами и стратегии, които носят клиенти и реален растеж.
              </p>

              {/* CTA with hover animation */}
              <div className="pt-4 animate-fade-up" style={{ animationDelay: '0.5s' }}>
                <Link
                  href="#contact"
                  className="group relative inline-flex items-center justify-center rounded-xl bg-gray-900 px-8 py-4 text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:bg-gray-800 hover:scale-105 hover:shadow-xl"
                >
                  <span className="relative z-10">Възползвайте се от нашите изпитани решения</span>
                  <ArrowRight className="relative z-10 ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </div>
            </div>

            {/* Right Image Placeholder with subtle animation */}
            <div className="lg:col-span-7 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center transform transition-all duration-500 group-hover:scale-110">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gray-200 flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-300">
                      <svg className="w-12 h-12 text-gray-400 group-hover:text-gray-500 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm font-medium">Hero Image</p>
                    <p className="text-gray-300 text-xs mt-1">1920x1080</p>
                  </div>
                </div>
                {/* Subtle shimmer effect */}
                <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/30"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* Partnership Statement - Simple & Bold with subtle pattern */}
      <section className="relative py-28 bg-gray-50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100/20 rounded-full blur-3xl"></div>
        
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <p className="text-3xl md:text-4xl font-light text-gray-900 leading-relaxed animate-fade-in">
            Ние партнираме с вас, за да стимулираме 
            <span className="block font-semibold text-blue-600 mt-3 text-4xl md:text-5xl">растежа на бизнеса.</span>
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Потопете се в нашите услуги
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Social Media Full Service */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-200">
              {/* Image Placeholder */}
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
            <div className="group rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-pink-200">
              {/* Image Placeholder */}
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
            <div className="group rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-purple-200">
              {/* Image Placeholder */}
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
      <section className="relative py-28 bg-gray-50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-100/20 rounded-full blur-3xl"></div>
        
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Разгледайте предишната ни работа
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative aspect-[16/9] w-full bg-gradient-to-br from-amber-50 to-yellow-50 flex items-center justify-center overflow-hidden">
                <div className="text-center transform transition-all duration-700 group-hover:scale-110">
                  <svg className="w-24 h-24 text-amber-200 group-hover:text-amber-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                  <p className="text-amber-300 text-sm mt-2 font-medium">Honey Farm Project</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              <div className="p-8">
                <p className="text-sm font-medium text-blue-600 mb-2">Документално видео</p>
                <h3 className="text-2xl font-bold text-gray-900">“Медена ферма подарява 1 тон мед”</h3>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative aspect-[16/9] w-full bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center overflow-hidden">
                <div className="text-center transform transition-all duration-700 group-hover:scale-110">
                  <svg className="w-24 h-24 text-blue-200 group-hover:text-blue-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <p className="text-blue-300 text-sm mt-2 font-medium">Real Estate Project</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
              <div className="p-8">
                <p className="text-sm font-medium text-blue-600 mb-2">Проект</p>
                <h3 className="text-2xl font-bold text-gray-900">“Недвижими имоти”</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Чуйте го от клиентите
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
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
            </div>

            {/* Testimonial 2 */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
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
            </div>

            {/* Testimonial 3 */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
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
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-28 bg-gray-900 text-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up">
            Нека изведем вашата компания
            <span className="block text-blue-400 mt-3 text-5xl md:text-6xl">на следващото ниво</span>
          </h2>
          <div className="w-20 h-1 bg-blue-400 mx-auto my-8 rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-12">
            {/* Phone */}
            <div className="group rounded-xl bg-gray-800/50 backdrop-blur-sm p-6 hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-700 hover:border-blue-500">
              <Phone className="h-8 w-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-lg font-semibold mb-1">0889929627 / 0888928003</p>
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
              className="group relative inline-flex items-center justify-center rounded-xl bg-blue-600 px-12 py-5 text-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10">Свържете се!</span>
              <ArrowRight className="relative z-10 ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="text-gray-400 text-sm">© 2026 BrandFuel. Всички права запазени.</p>
        </div>
      </footer>

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
        
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </main>
  );
}
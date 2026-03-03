"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type Dict = {
  tagline: string;
  subtitle: string;
  bookCta: string;
  learnMore: string;
};

type Props = {
  dict: Dict;
};

export default function HeroContent({ dict }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => ref.current?.classList.add("visible"), 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background photo */}
      <Image
        src="/hero.jpg"
        alt="Bella Salão de Beleza, Carcavelos"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-rose-900/45" />
      {/* Subtle gradient bottom fade */}
      <div className="absolute inset-0 bg-linear-to-t from-rose-900/60 via-transparent to-transparent" />

      {/* Content */}
      <div
        ref={ref}
        className="reveal relative z-10 text-center px-6 max-w-3xl mx-auto pt-20"
      >
        <p className="text-cream-200/80 text-xs font-semibold tracking-[0.35em] uppercase mb-6">
          Carcavelos · Cascais
        </p>

        <h1
          className="text-8xl sm:text-9xl text-white leading-none mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Bella
        </h1>

        <p
          className="text-xl sm:text-2xl text-cream-100/90 italic mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {dict.tagline}
        </p>

        <p className="text-cream-200/80 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          {dict.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-gold-600 hover:bg-gold-500 text-white font-semibold px-8 py-4 rounded-full text-sm transition-colors shadow-lg shadow-gold-600/30"
          >
            {dict.bookCta}
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center border-2 border-white/40 text-white hover:border-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full text-sm transition-colors"
          >
            {dict.learnMore}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <div className="w-px h-8 bg-white/30" />
        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" aria-hidden="true">
          <path
            d="M1 1l6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}

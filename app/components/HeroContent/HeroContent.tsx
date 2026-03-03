"use client";

import { useEffect, useRef } from "react";

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
      {/* Layered gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200" />
      <div className="absolute inset-0 bg-gradient-to-t from-rose-900/10 via-transparent to-transparent" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 right-1/3 w-72 h-72 rounded-full bg-rose-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-56 h-56 rounded-full bg-gold-400/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-rose-500/8 blur-2xl pointer-events-none" />

      {/* Content */}
      <div
        ref={ref}
        className="reveal relative z-10 text-center px-6 max-w-3xl mx-auto pt-20"
      >
        <p className="text-rose-500 text-xs font-semibold tracking-[0.35em] uppercase mb-6">
          Carcavelos · Cascais
        </p>

        <h1
          className="text-8xl sm:text-9xl text-rose-900 leading-none mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Bella
        </h1>

        <p
          className="text-xl sm:text-2xl text-rose-800 italic mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {dict.tagline}
        </p>

        <p className="text-rose-700 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          {dict.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-gold-600 hover:bg-gold-500 text-white font-semibold px-8 py-4 rounded-full text-sm transition-colors shadow-lg shadow-gold-600/20"
          >
            {dict.bookCta}
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center border-2 border-rose-300 text-rose-800 hover:border-rose-500 hover:text-rose-900 font-semibold px-8 py-4 rounded-full text-sm transition-colors"
          >
            {dict.learnMore}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-rose-400 animate-bounce">
        <div className="w-px h-8 bg-rose-300" />
        <svg
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
          aria-hidden="true"
        >
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

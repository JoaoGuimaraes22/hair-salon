"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type Dict = {
  sectionLabel: string;
  heading: string;
  p1: string;
  p2: string;
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
  stat3Value: string;
  stat3Label: string;
  brandsLabel: string;
};

type Props = {
  dict: Dict;
};

const brands = [
  "Kérastase",
  "L'Oréal Professionnel",
  "Olaplex",
  "Truss Professional",
  "Keune Haircosmetics",
];

export default function About({ dict }: Props) {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [textRef.current, imageRef.current].filter(Boolean) as HTMLDivElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-cream-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text */}
          <div ref={textRef} className="reveal">
            <p className="text-rose-500 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
              {dict.sectionLabel}
            </p>
            <h2
              className="text-3xl sm:text-4xl text-rose-900 leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {dict.heading}
            </h2>
            <p className="text-rose-700 leading-relaxed mb-4">{dict.p1}</p>
            <p className="text-rose-700 leading-relaxed mb-10">{dict.p2}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { value: dict.stat1Value, label: dict.stat1Label },
                { value: dict.stat2Value, label: dict.stat2Label },
                { value: dict.stat3Value, label: dict.stat3Label },
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 bg-cream-100 rounded-2xl">
                  <div
                    className="text-2xl sm:text-3xl text-rose-900 font-bold mb-1"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs text-rose-600 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Brands */}
            <div>
              <p className="text-xs font-semibold text-rose-400 tracking-widest uppercase mb-3">
                {dict.brandsLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <span
                    key={brand}
                    className="text-xs text-rose-700 bg-cream-200 px-3 py-1.5 rounded-full font-medium"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Photo */}
          <div ref={imageRef} className="reveal" style={{ transitionDelay: "0.15s" }}>
            <div className="relative">
              <div className="relative aspect-3/4 rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="/about.jpg"
                  alt="Bella Salão de Beleza — equipa e interior"
                  fill
                  className="object-cover"
                />
                {/* Caption overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-rose-900/50 to-transparent flex items-end">
                  <div className="w-full p-6">
                    <p
                      className="text-white text-lg italic"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      &ldquo;Bella&rdquo;
                    </p>
                    <p className="text-white/70 text-sm">Carcavelos</p>
                  </div>
                </div>
              </div>
              {/* Decorative accents */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gold-400/20 border-4 border-cream-50" />
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-rose-400/20 border-4 border-cream-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

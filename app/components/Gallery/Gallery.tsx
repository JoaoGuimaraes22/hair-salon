"use client";

import { useEffect, useRef } from "react";

type Dict = {
  sectionLabel: string;
  heading: string;
  subtitle: string;
  instagramCta: string;
  img1Alt: string;
  img2Alt: string;
  img3Alt: string;
  img4Alt: string;
  img5Alt: string;
  img6Alt: string;
};

type Props = {
  dict: Dict;
};

const placeholders = [
  { gradient: "from-rose-300/60 via-rose-400/40 to-gold-400/30", tall: true },
  { gradient: "from-cream-300 via-rose-200/50 to-rose-300/40", tall: false },
  { gradient: "from-gold-400/30 via-cream-200 to-rose-400/20", tall: false },
  { gradient: "from-rose-800/20 via-rose-500/30 to-rose-400/20", tall: false },
  { gradient: "from-rose-200/60 via-gold-300/30 to-cream-300", tall: true },
  { gradient: "from-cream-200 via-rose-300/40 to-gold-400/25", tall: false },
];

export default function Gallery({ dict }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const alts = [
    dict.img1Alt,
    dict.img2Alt,
    dict.img3Alt,
    dict.img4Alt,
    dict.img5Alt,
    dict.img6Alt,
  ];

  return (
    <section id="gallery" className="bg-cream-100 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={ref} className="reveal text-center mb-12">
          <p className="text-rose-500 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            {dict.sectionLabel}
          </p>
          <h2
            className="text-3xl sm:text-4xl text-rose-900 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {dict.heading}
          </h2>
          <p className="text-rose-700 max-w-xl mx-auto">{dict.subtitle}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-10">
          {placeholders.map((p, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                p.tall ? "row-span-2" : ""
              }`}
              style={{
                aspectRatio: p.tall ? undefined : "1 / 1",
                transitionDelay: `${i * 60}ms`,
              }}
            >
              {/* Placeholder image */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${p.gradient} transition-transform duration-500 group-hover:scale-105`}
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-rose-900/0 group-hover:bg-rose-900/40 transition-all duration-300 flex items-end">
                <p className="w-full p-4 text-white text-sm font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {alts[i]}
                </p>
              </div>

              {/* Camera icon placeholder */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-0 transition-opacity duration-300">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4a2032"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                  <circle cx="12" cy="13" r="4" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-rose-300 text-rose-800 hover:border-rose-500 hover:text-rose-900 font-semibold px-6 py-3 rounded-full transition-colors text-sm"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            {dict.instagramCta}
          </a>
        </div>
      </div>
    </section>
  );
}

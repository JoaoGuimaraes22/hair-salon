"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

type Dict = {
  sectionLabel: string;
  heading: string;
  subtitle: string;
  tab1: string;
  tab2: string;
  tab3: string;
  tab4: string;
  cat1Tagline: string;
  cat2Tagline: string;
  cat3Tagline: string;
  cat4Tagline: string;
  viewServices: string;
  hair1Name: string;
  hair1Desc: string;
  hair2Name: string;
  hair2Desc: string;
  hair3Name: string;
  hair3Desc: string;
  hair4Name: string;
  hair4Desc: string;
  hair5Name: string;
  hair5Desc: string;
  color1Name: string;
  color1Desc: string;
  color2Name: string;
  color2Desc: string;
  color3Name: string;
  color3Desc: string;
  color4Name: string;
  color4Desc: string;
  color5Name: string;
  color5Desc: string;
  treat1Name: string;
  treat1Desc: string;
  treat2Name: string;
  treat2Desc: string;
  treat3Name: string;
  treat3Desc: string;
  treat4Name: string;
  treat4Desc: string;
  treat5Name: string;
  treat5Desc: string;
  beauty1Name: string;
  beauty1Desc: string;
  beauty2Name: string;
  beauty2Desc: string;
  beauty3Name: string;
  beauty3Desc: string;
  beauty4Name: string;
  beauty4Desc: string;
  beauty5Name: string;
  beauty5Desc: string;
};

type Props = {
  dict: Dict;
};

const categoryImages = [
  "/img/services/services-hair.jpg",
  "/img/services/services-color.jpg",
  "/img/services/services-treatments.jpg",
  "/img/services/services-beauty.jpg",
];

const categoryGradients = [
  "from-rose-900/50 via-rose-900/40 to-transparent",
  "from-rose-800/50 via-rose-800/30 to-transparent",
  "from-rose-900/50 via-rose-900/30 to-transparent",
  "from-rose-800/50 via-rose-800/30 to-transparent",
];

export default function Services({ dict }: Props) {
  const [expanded, setExpanded] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const categories = [
    {
      name: dict.tab1,
      tagline: dict.cat1Tagline,
      services: [
        { name: dict.hair1Name, desc: dict.hair1Desc },
        { name: dict.hair2Name, desc: dict.hair2Desc },
        { name: dict.hair3Name, desc: dict.hair3Desc },
        { name: dict.hair4Name, desc: dict.hair4Desc },
        { name: dict.hair5Name, desc: dict.hair5Desc },
      ],
    },
    {
      name: dict.tab2,
      tagline: dict.cat2Tagline,
      services: [
        { name: dict.color1Name, desc: dict.color1Desc },
        { name: dict.color2Name, desc: dict.color2Desc },
        { name: dict.color3Name, desc: dict.color3Desc },
        { name: dict.color4Name, desc: dict.color4Desc },
        { name: dict.color5Name, desc: dict.color5Desc },
      ],
    },
    {
      name: dict.tab3,
      tagline: dict.cat3Tagline,
      services: [
        { name: dict.treat1Name, desc: dict.treat1Desc },
        { name: dict.treat2Name, desc: dict.treat2Desc },
        { name: dict.treat3Name, desc: dict.treat3Desc },
        { name: dict.treat4Name, desc: dict.treat4Desc },
        { name: dict.treat5Name, desc: dict.treat5Desc },
      ],
    },
    {
      name: dict.tab4,
      tagline: dict.cat4Tagline,
      services: [
        { name: dict.beauty1Name, desc: dict.beauty1Desc },
        { name: dict.beauty2Name, desc: dict.beauty2Desc },
        { name: dict.beauty3Name, desc: dict.beauty3Desc },
        { name: dict.beauty4Name, desc: dict.beauty4Desc },
        { name: dict.beauty5Name, desc: dict.beauty5Desc },
      ],
    },
  ];

  const toggle = (i: number) => {
    setExpanded(expanded === i ? null : i);
  };

  return (
    <section id="services" className="bg-cream-100 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div ref={ref} className="reveal text-center mb-14">
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

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, i) => {
            const isExpanded = expanded === i;
            return (
              <div
                key={i}
                className="group rounded-2xl overflow-hidden border border-cream-300 bg-cream-50 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Image card */}
                <button
                  onClick={() => toggle(i)}
                  className="relative w-full aspect-[4/3] overflow-hidden cursor-pointer block"
                  aria-expanded={isExpanded}
                >
                  <Image
                    src={categoryImages[i]}
                    alt={cat.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${categoryGradients[i]}`}
                  />
                  {/* Category label */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <span
                      className="inline-block bg-rose-900/90 backdrop-blur-sm text-cream-50 px-8 py-3 text-lg sm:text-xl font-semibold tracking-widest uppercase"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {cat.name}
                    </span>
                    <p className="mt-3 text-cream-100 text-sm sm:text-base font-medium drop-shadow-lg max-w-xs">
                      {cat.tagline}
                    </p>
                  </div>
                  {/* Expand indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <span className="text-cream-100/80 text-xs tracking-wider uppercase flex items-center gap-1.5">
                      {dict.viewServices}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </div>
                </button>

                {/* Expandable services list */}
                <div
                  className={`grid transition-all duration-400 ease-in-out ${
                    isExpanded
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-5 space-y-3">
                      {cat.services.map((service, j) => (
                        <div
                          key={j}
                          className="flex items-start gap-3 py-2 border-b border-cream-200 last:border-b-0"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 shrink-0" />
                          <div>
                            <h4
                              className="text-rose-900 font-semibold text-sm"
                              style={{
                                fontFamily: "'Playfair Display', serif",
                              }}
                            >
                              {service.name}
                            </h4>
                            <p className="text-rose-600 text-xs leading-relaxed mt-0.5">
                              {service.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                      <a
                        href="#pricing"
                        className="inline-flex items-center gap-1.5 text-gold-600 text-xs font-semibold tracking-wide uppercase mt-2 hover:text-gold-500 transition-colors"
                      >
                        <span>Ver precos</span>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

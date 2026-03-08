"use client";

import { useEffect, useRef } from "react";
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
  bookCta: string;
  consultNote: string;
  hair1Name: string;
  hair1Desc: string;
  hair1Price: string;
  hair2Name: string;
  hair2Desc: string;
  hair2Price: string;
  hair3Name: string;
  hair3Desc: string;
  hair3Price: string;
  hair4Name: string;
  hair4Desc: string;
  hair4Price: string;
  hair5Name: string;
  hair5Desc: string;
  hair5Price: string;
  color1Name: string;
  color1Desc: string;
  color1Price: string;
  color2Name: string;
  color2Desc: string;
  color2Price: string;
  color3Name: string;
  color3Desc: string;
  color3Price: string;
  color4Name: string;
  color4Desc: string;
  color4Price: string;
  color5Name: string;
  color5Desc: string;
  color5Price: string;
  treat1Name: string;
  treat1Desc: string;
  treat1Price: string;
  treat2Name: string;
  treat2Desc: string;
  treat2Price: string;
  treat3Name: string;
  treat3Desc: string;
  treat3Price: string;
  treat4Name: string;
  treat4Desc: string;
  treat4Price: string;
  treat5Name: string;
  treat5Desc: string;
  treat5Price: string;
  beauty1Name: string;
  beauty1Desc: string;
  beauty1Price: string;
  beauty2Name: string;
  beauty2Desc: string;
  beauty2Price: string;
  beauty3Name: string;
  beauty3Desc: string;
  beauty3Price: string;
  beauty4Name: string;
  beauty4Desc: string;
  beauty4Price: string;
  beauty5Name: string;
  beauty5Desc: string;
  beauty5Price: string;
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
  "from-rose-900/60 via-rose-900/30 to-transparent",
  "from-rose-800/60 via-rose-800/30 to-transparent",
  "from-rose-900/60 via-rose-900/30 to-transparent",
  "from-rose-800/60 via-rose-800/30 to-transparent",
];

export default function Services({ dict }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

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

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const wh = window.innerHeight;
        imageRefs.current.forEach((container) => {
          if (!container) return;
          const rect = container.getBoundingClientRect();
          const center = rect.top + rect.height / 2;
          const offset = ((center - wh / 2) / wh) * -40;
          const img = container.querySelector("img");
          if (img) {
            img.style.transform = `translateY(${offset}px) scale(1.15)`;
          }
        });
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const categories = [
    {
      name: dict.tab1,
      tagline: dict.cat1Tagline,
      services: [
        { name: dict.hair1Name, desc: dict.hair1Desc, price: dict.hair1Price },
        { name: dict.hair2Name, desc: dict.hair2Desc, price: dict.hair2Price },
        { name: dict.hair3Name, desc: dict.hair3Desc, price: dict.hair3Price },
        { name: dict.hair4Name, desc: dict.hair4Desc, price: dict.hair4Price },
        { name: dict.hair5Name, desc: dict.hair5Desc, price: dict.hair5Price },
      ],
    },
    {
      name: dict.tab2,
      tagline: dict.cat2Tagline,
      services: [
        {
          name: dict.color1Name,
          desc: dict.color1Desc,
          price: dict.color1Price,
        },
        {
          name: dict.color2Name,
          desc: dict.color2Desc,
          price: dict.color2Price,
        },
        {
          name: dict.color3Name,
          desc: dict.color3Desc,
          price: dict.color3Price,
        },
        {
          name: dict.color4Name,
          desc: dict.color4Desc,
          price: dict.color4Price,
        },
        {
          name: dict.color5Name,
          desc: dict.color5Desc,
          price: dict.color5Price,
        },
      ],
    },
    {
      name: dict.tab3,
      tagline: dict.cat3Tagline,
      services: [
        {
          name: dict.treat1Name,
          desc: dict.treat1Desc,
          price: dict.treat1Price,
        },
        {
          name: dict.treat2Name,
          desc: dict.treat2Desc,
          price: dict.treat2Price,
        },
        {
          name: dict.treat3Name,
          desc: dict.treat3Desc,
          price: dict.treat3Price,
        },
        {
          name: dict.treat4Name,
          desc: dict.treat4Desc,
          price: dict.treat4Price,
        },
        {
          name: dict.treat5Name,
          desc: dict.treat5Desc,
          price: dict.treat5Price,
        },
      ],
    },
    {
      name: dict.tab4,
      tagline: dict.cat4Tagline,
      services: [
        {
          name: dict.beauty1Name,
          desc: dict.beauty1Desc,
          price: dict.beauty1Price,
        },
        {
          name: dict.beauty2Name,
          desc: dict.beauty2Desc,
          price: dict.beauty2Price,
        },
        {
          name: dict.beauty3Name,
          desc: dict.beauty3Desc,
          price: dict.beauty3Price,
        },
        {
          name: dict.beauty4Name,
          desc: dict.beauty4Desc,
          price: dict.beauty4Price,
        },
        {
          name: dict.beauty5Name,
          desc: dict.beauty5Desc,
          price: dict.beauty5Price,
        },
      ],
    },
  ];

  return (
    <section id="services" className="bg-cream-100 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={ref} className="reveal text-center mb-16 md:mb-20">
          <p className="text-rose-500 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            {dict.sectionLabel}
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-rose-900 mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {dict.heading}
          </h2>
          <p className="text-rose-700 max-w-xl mx-auto">{dict.subtitle}</p>
        </div>

        <div className="space-y-8 md:space-y-12">
          {categories.map((cat, i) => {
            const reversed = i % 2 === 1;
            const hasConsultation = cat.services.some(
              (s) =>
                s.price.toLowerCase().includes("consulta") ||
                s.price.toLowerCase().includes("consultation"),
            );

            return (
              <div
                key={i}
                className={`flex flex-col md:flex-row md:items-stretch gap-0 rounded-2xl overflow-hidden border border-cream-300 bg-cream-50 shadow-sm ${
                  reversed ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image side */}
                <div
                  ref={(el) => { imageRefs.current[i] = el; }}
                  className="relative md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden group"
                >
                  <Image
                    src={categoryImages[i]}
                    alt={cat.name}
                    fill
                    className="object-cover will-change-transform scale-115"
                    style={{ transition: "transform 0.1s linear" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${categoryGradients[i]}`}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <span
                      className="inline-block bg-rose-900/85 backdrop-blur-sm text-cream-50 px-10 py-3.5 text-xl sm:text-2xl tracking-[0.2em] uppercase"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {cat.name}
                    </span>
                    <p className="mt-3 text-cream-100/90 text-sm sm:text-base italic drop-shadow-lg max-w-xs">
                      {cat.tagline}
                    </p>
                  </div>
                </div>

                {/* Services side */}
                <div className="md:w-1/2 flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <div className="space-y-0">
                    {cat.services.map((service, j) => (
                      <div
                        key={j}
                        className="group/item py-4 border-b border-cream-200/80 last:border-b-0"
                      >
                        <div className="flex items-baseline justify-between gap-4">
                          <h4
                            className="text-rose-900 text-base lg:text-lg tracking-wide"
                            style={{
                              fontFamily: "'Playfair Display', serif",
                            }}
                          >
                            {service.name}
                          </h4>
                          <span className="shrink-0 border-b border-dotted border-cream-300 flex-1 min-w-8 mb-1" />
                          <span
                            className={`shrink-0 text-sm font-semibold ${
                              service.price.includes("grátis") ||
                              service.price.includes("free")
                                ? "text-green-700"
                                : service.price.includes("consulta") ||
                                    service.price.includes("consultation")
                                  ? "text-rose-400 italic font-normal"
                                  : "text-gold-600"
                            }`}
                          >
                            {service.price}
                          </span>
                        </div>
                        <p className="text-rose-600/70 text-xs lg:text-sm mt-1 leading-relaxed italic">
                          {service.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  {hasConsultation && (
                    <p className="text-[11px] text-rose-400 mt-4 italic">
                      {dict.consultNote}
                    </p>
                  )}

                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center self-start bg-gold-600 hover:bg-gold-500 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors shadow-md shadow-gold-600/15"
                  >
                    {dict.bookCta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

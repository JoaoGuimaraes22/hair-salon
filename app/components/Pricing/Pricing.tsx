"use client";

import { useState, useEffect, useRef } from "react";

type Dict = {
  sectionLabel: string;
  heading: string;
  subtitle: string;
  tab1: string;
  tab2: string;
  tab3: string;
  tab4: string;
  bookCta: string;
  consultNote: string;
  hair1Name: string; hair1Price: string;
  hair2Name: string; hair2Price: string;
  hair3Name: string; hair3Price: string;
  hair4Name: string; hair4Price: string;
  hair5Name: string; hair5Price: string;
  color1Name: string; color1Price: string;
  color2Name: string; color2Price: string;
  color3Name: string; color3Price: string;
  color4Name: string; color4Price: string;
  color5Name: string; color5Price: string;
  treat1Name: string; treat1Price: string;
  treat2Name: string; treat2Price: string;
  treat3Name: string; treat3Price: string;
  treat4Name: string; treat4Price: string;
  treat5Name: string; treat5Price: string;
  beauty1Name: string; beauty1Price: string;
  beauty2Name: string; beauty2Price: string;
  beauty3Name: string; beauty3Price: string;
  beauty4Name: string; beauty4Price: string;
  beauty5Name: string; beauty5Price: string;
};

type Props = {
  dict: Dict;
};

const specialPrices = new Set(["grátis", "free", "sob consulta", "on consultation"]);

export default function Pricing({ dict }: Props) {
  const [activeTab, setActiveTab] = useState(0);
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

  const tabs = [dict.tab1, dict.tab2, dict.tab3, dict.tab4];

  const categories = [
    [
      { name: dict.hair1Name, price: dict.hair1Price },
      { name: dict.hair2Name, price: dict.hair2Price },
      { name: dict.hair3Name, price: dict.hair3Price },
      { name: dict.hair4Name, price: dict.hair4Price },
      { name: dict.hair5Name, price: dict.hair5Price },
    ],
    [
      { name: dict.color1Name, price: dict.color1Price },
      { name: dict.color2Name, price: dict.color2Price },
      { name: dict.color3Name, price: dict.color3Price },
      { name: dict.color4Name, price: dict.color4Price },
      { name: dict.color5Name, price: dict.color5Price },
    ],
    [
      { name: dict.treat1Name, price: dict.treat1Price },
      { name: dict.treat2Name, price: dict.treat2Price },
      { name: dict.treat3Name, price: dict.treat3Price },
      { name: dict.treat4Name, price: dict.treat4Price },
      { name: dict.treat5Name, price: dict.treat5Price },
    ],
    [
      { name: dict.beauty1Name, price: dict.beauty1Price },
      { name: dict.beauty2Name, price: dict.beauty2Price },
      { name: dict.beauty3Name, price: dict.beauty3Price },
      { name: dict.beauty4Name, price: dict.beauty4Price },
      { name: dict.beauty5Name, price: dict.beauty5Price },
    ],
  ];

  const hasConsultation = categories[activeTab].some((item) =>
    item.price.toLowerCase().includes("consulta") || item.price.toLowerCase().includes("consultation")
  );

  return (
    <section id="pricing" className="bg-cream-50 py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
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
          <p className="text-rose-700">{dict.subtitle}</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-cream-200 rounded-full p-1 gap-1 flex-wrap justify-center">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === i
                    ? "bg-rose-900 text-cream-50 shadow-sm"
                    : "text-rose-700 hover:text-rose-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing rows */}
        <div className="bg-cream-100 rounded-3xl overflow-hidden border border-cream-300">
          {categories[activeTab].map((item, i) => {
            return (
              <div
                key={`${activeTab}-${i}`}
                className="flex items-center justify-between px-6 py-4 border-b border-cream-200 last:border-0 hover:bg-cream-200/50 transition-colors"
              >
                <span className="text-rose-800 font-medium">{item.name}</span>
                <span
                  className={`text-sm font-semibold ${
                    item.price.includes("grátis") || item.price.includes("free")
                      ? "text-green-700 bg-green-50 px-3 py-1 rounded-full"
                      : item.price.includes("consulta") || item.price.includes("consultation")
                      ? "text-rose-500 italic font-normal"
                      : "text-rose-900"
                  }`}
                >
                  {item.price}
                </span>
              </div>
            );
          })}
        </div>

        {hasConsultation && (
          <p className="text-xs text-rose-400 text-center mt-3 italic">
            {dict.consultNote}
          </p>
        )}

        <div className="text-center mt-8">
          <a
            href="#contact"
            className="inline-flex items-center bg-gold-600 hover:bg-gold-500 text-white font-semibold px-8 py-4 rounded-full transition-colors shadow-lg shadow-gold-600/20"
          >
            {dict.bookCta}
          </a>
        </div>
      </div>
    </section>
  );
}

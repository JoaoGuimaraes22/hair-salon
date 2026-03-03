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
  hair1Name: string; hair1Desc: string;
  hair2Name: string; hair2Desc: string;
  hair3Name: string; hair3Desc: string;
  hair4Name: string; hair4Desc: string;
  hair5Name: string; hair5Desc: string;
  color1Name: string; color1Desc: string;
  color2Name: string; color2Desc: string;
  color3Name: string; color3Desc: string;
  color4Name: string; color4Desc: string;
  color5Name: string; color5Desc: string;
  treat1Name: string; treat1Desc: string;
  treat2Name: string; treat2Desc: string;
  treat3Name: string; treat3Desc: string;
  treat4Name: string; treat4Desc: string;
  treat5Name: string; treat5Desc: string;
  beauty1Name: string; beauty1Desc: string;
  beauty2Name: string; beauty2Desc: string;
  beauty3Name: string; beauty3Desc: string;
  beauty4Name: string; beauty4Desc: string;
  beauty5Name: string; beauty5Desc: string;
};

type Props = {
  dict: Dict;
};

const ScissorsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
    <line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/>
    <line x1="8.12" y1="8.12" x2="12" y2="12"/>
  </svg>
);

const PaletteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
  </svg>
);

const LeafIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);

const SparkleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.88 5.76a2 2 0 0 0 1.36 1.36L21 12l-5.76 1.88a2 2 0 0 0-1.36 1.36L12 21l-1.88-5.76a2 2 0 0 0-1.36-1.36L3 12l5.76-1.88a2 2 0 0 0 1.36-1.36z"/>
  </svg>
);

export default function Services({ dict }: Props) {
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

  const tabs = [
    { label: dict.tab1, icon: <ScissorsIcon /> },
    { label: dict.tab2, icon: <PaletteIcon /> },
    { label: dict.tab3, icon: <LeafIcon /> },
    { label: dict.tab4, icon: <SparkleIcon /> },
  ];

  const services = [
    [
      { name: dict.hair1Name, desc: dict.hair1Desc },
      { name: dict.hair2Name, desc: dict.hair2Desc },
      { name: dict.hair3Name, desc: dict.hair3Desc },
      { name: dict.hair4Name, desc: dict.hair4Desc },
      { name: dict.hair5Name, desc: dict.hair5Desc },
    ],
    [
      { name: dict.color1Name, desc: dict.color1Desc },
      { name: dict.color2Name, desc: dict.color2Desc },
      { name: dict.color3Name, desc: dict.color3Desc },
      { name: dict.color4Name, desc: dict.color4Desc },
      { name: dict.color5Name, desc: dict.color5Desc },
    ],
    [
      { name: dict.treat1Name, desc: dict.treat1Desc },
      { name: dict.treat2Name, desc: dict.treat2Desc },
      { name: dict.treat3Name, desc: dict.treat3Desc },
      { name: dict.treat4Name, desc: dict.treat4Desc },
      { name: dict.treat5Name, desc: dict.treat5Desc },
    ],
    [
      { name: dict.beauty1Name, desc: dict.beauty1Desc },
      { name: dict.beauty2Name, desc: dict.beauty2Desc },
      { name: dict.beauty3Name, desc: dict.beauty3Desc },
      { name: dict.beauty4Name, desc: dict.beauty4Desc },
      { name: dict.beauty5Name, desc: dict.beauty5Desc },
    ],
  ];

  return (
    <section id="services" className="bg-cream-100 py-20 md:py-28">
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

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-cream-200 rounded-full p-1 gap-1">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === i
                    ? "bg-rose-900 text-cream-50 shadow-sm"
                    : "text-rose-700 hover:text-rose-900"
                }`}
              >
                <span className="w-4 h-4">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services[activeTab].map((service, i) => (
            <div
              key={`${activeTab}-${i}`}
              className="bg-cream-50 rounded-2xl p-6 border border-cream-300 hover:border-rose-300 hover:shadow-md transition-all duration-200"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-500 flex items-center justify-center mb-4">
                {tabs[activeTab].icon}
              </div>
              <h3
                className="text-rose-900 font-semibold mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {service.name}
              </h3>
              <p className="text-rose-600 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

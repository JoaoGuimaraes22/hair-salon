"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type Dict = {
  sectionLabel: string;
  heading: string;
  subtitle: string;
  bookWith: string;
  m1Name: string; m1Role: string; m1Spec: string;
  m2Name: string; m2Role: string; m2Spec: string;
  m3Name: string; m3Role: string; m3Spec: string;
};

type Props = {
  dict: Dict;
};

export default function Team({ dict }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const members = [
    { name: dict.m1Name, role: dict.m1Role, spec: dict.m1Spec, photo: "/team1.jpg" },
    { name: dict.m2Name, role: dict.m2Role, spec: dict.m2Spec, photo: "/team2.jpg" },
    { name: dict.m3Name, role: dict.m3Role, spec: dict.m3Spec, photo: "/team3.jpg" },
  ];

  return (
    <section id="team" className="bg-cream-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
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

        <div ref={ref} className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center bg-cream-100 rounded-3xl p-8 border border-cream-300 hover:border-rose-300 hover:shadow-lg transition-all duration-300"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Avatar */}
              <div className="relative w-28 h-28 rounded-full overflow-hidden mb-5 shadow-md ring-4 ring-cream-50">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                />
              </div>

              {/* Info */}
              <h3
                className="text-xl text-rose-900 font-semibold mb-1"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {member.name}
              </h3>
              <p className="text-rose-500 text-sm font-medium mb-3">{member.role}</p>
              <p className="text-rose-600 text-xs mb-6 leading-relaxed">{member.spec}</p>

              {/* Book button */}
              <a
                href="#contact"
                className="mt-auto inline-flex items-center justify-center w-full border-2 border-rose-300 text-rose-800 hover:bg-rose-900 hover:text-cream-50 hover:border-rose-900 font-semibold px-4 py-2.5 rounded-full text-sm transition-all duration-200"
              >
                {dict.bookWith} {member.name.split(" ")[0]}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

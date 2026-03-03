"use client";

import { useEffect, useRef } from "react";

type Dict = {
  sectionLabel: string;
  heading: string;
  subtitle: string;
  r1Name: string;
  r1Text: string;
  r1Date: string;
  r2Name: string;
  r2Text: string;
  r2Date: string;
  r3Name: string;
  r3Text: string;
  r3Date: string;
  r4Name: string;
  r4Text: string;
  r4Date: string;
  r5Name: string;
  r5Text: string;
  r5Date: string;
  r6Name: string;
  r6Text: string;
  r6Date: string;
};

type Props = {
  dict: Dict;
};

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="#d4a017"
          aria-hidden="true"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews({ dict }: Props) {
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

  const reviews = [
    { name: dict.r1Name, text: dict.r1Text, date: dict.r1Date },
    { name: dict.r2Name, text: dict.r2Text, date: dict.r2Date },
    { name: dict.r3Name, text: dict.r3Text, date: dict.r3Date },
    { name: dict.r4Name, text: dict.r4Text, date: dict.r4Date },
    { name: dict.r5Name, text: dict.r5Text, date: dict.r5Date },
    { name: dict.r6Name, text: dict.r6Text, date: dict.r6Date },
  ];

  return (
    <section id="reviews" className="bg-cream-100 py-20 md:py-28">
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

        <div
          ref={ref}
          className="reveal grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-cream-50 rounded-2xl p-6 border border-cream-300 flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <Stars />

              {/* Quote */}
              <p className="text-rose-700 text-sm leading-relaxed flex-1 mb-5 italic">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Client */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-linear-to-br from-rose-300/60 to-rose-400/40 flex items-center justify-center shrink-0">
                  <span className="text-xs font-semibold text-rose-700">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-rose-900 text-sm font-semibold">
                    {review.name}
                  </p>
                  <p className="text-rose-400 text-xs">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

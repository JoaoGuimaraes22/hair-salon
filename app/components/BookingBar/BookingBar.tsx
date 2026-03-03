"use client";

type Dict = {
  cta: string;
  phone: string;
};

type Props = {
  dict: Dict;
};

const PHONE = "+351912345678";

export default function BookingBar({ dict }: Props) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-cream-50/95 backdrop-blur-sm border-t border-cream-300 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
      <div className="flex gap-3 max-w-sm mx-auto">
        <a
          href={`tel:${PHONE}`}
          className="flex-1 flex items-center justify-center gap-2 border-2 border-rose-300 text-rose-800 font-semibold py-3 rounded-full text-sm transition-colors hover:border-rose-500"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2z" />
          </svg>
          {dict.phone}
        </a>
        <a
          href="#contact"
          className="flex-[2] flex items-center justify-center bg-gold-600 hover:bg-gold-500 text-white font-semibold py-3 rounded-full text-sm transition-colors shadow-lg shadow-gold-600/20"
        >
          {dict.cta}
        </a>
      </div>
    </div>
  );
}

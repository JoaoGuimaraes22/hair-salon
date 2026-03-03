"use client";

import { useState, useEffect, useRef } from "react";

type Dict = {
  sectionLabel: string;
  heading: string;
  subtitle: string;
  addressLabel: string;
  address: string;
  hoursLabel: string;
  hours: string;
  hoursClosed: string;
  phoneLabel: string;
  phone: string;
  whatsappLabel: string;
  whatsapp: string;
  formName: string;
  formEmail: string;
  formPhone: string;
  formService: string;
  formMessage: string;
  formSubmit: string;
  formSuccess: string;
  formError: string;
  mapLabel: string;
  serviceOpt0: string;
  serviceOpt1: string;
  serviceOpt2: string;
  serviceOpt3: string;
  serviceOpt4: string;
  serviceOpt5: string;
  serviceOpt6: string;
};

type Props = {
  dict: Dict;
};

const WHATSAPP_NUMBER = "351912345678";

export default function Contact({ dict }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      form.name && `Nome: ${form.name}`,
      form.email && `Email: ${form.email}`,
      form.phone && `Tel: ${form.phone}`,
      form.service && `Serviço: ${form.service}`,
      form.message && `\n${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
    setSubmitted(true);
  };

  const serviceOptions = [
    dict.serviceOpt0,
    dict.serviceOpt1,
    dict.serviceOpt2,
    dict.serviceOpt3,
    dict.serviceOpt4,
    dict.serviceOpt5,
    dict.serviceOpt6,
  ];

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-cream-50 border border-cream-300 text-rose-900 placeholder:text-rose-400/60 focus:outline-none focus:border-rose-400 transition-colors text-sm";

  return (
    <section id="contact" className="bg-cream-50 py-20 md:py-28">
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
          <p className="text-rose-700">{dict.subtitle}</p>
        </div>

        <div ref={ref} className="reveal grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Info column */}
          <div className="flex flex-col gap-8">
            {/* Info items */}
            {[
              {
                label: dict.addressLabel,
                icon: (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                ),
                content: (
                  <p className="text-rose-700 text-sm">{dict.address}</p>
                ),
              },
              {
                label: dict.hoursLabel,
                icon: (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                ),
                content: (
                  <>
                    <p className="text-rose-700 text-sm">{dict.hours}</p>
                    <p className="text-rose-400 text-sm">{dict.hoursClosed}</p>
                  </>
                ),
              },
              {
                label: dict.phoneLabel,
                icon: (
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2z" />
                  </svg>
                ),
                content: (
                  <a
                    href={`tel:${dict.phone.replace(/\s/g, "")}`}
                    className="text-rose-700 text-sm hover:text-rose-900 transition-colors"
                  >
                    {dict.phone}
                  </a>
                ),
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-500 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-1">
                    {item.label}
                  </p>
                  {item.content}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba58] text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm w-fit"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>

            {/* Map placeholder */}
            <div>
              <p className="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-3">
                {dict.mapLabel}
              </p>
              <div className="w-full h-48 rounded-2xl bg-linear-to-br from-cream-200 to-cream-300 border border-cream-300 flex items-center justify-center overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.5!2d-9.335!3d38.6883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDQxJzE3LjkiTiA5wrAxOScwNi4wIlc!5e0!3m2!1spt!2spt!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bella Salão de Beleza — Carcavelos"
                />
              </div>
            </div>
          </div>

          {/* Form column */}
          <div>
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p
                    className="text-rose-900 font-semibold text-lg mb-2"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {dict.formSuccess}
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  required
                  placeholder={dict.formName}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
                <input
                  type="email"
                  required
                  placeholder={dict.formEmail}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                />
                <input
                  type="tel"
                  placeholder={dict.formPhone}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className={inputClass}
                />
                <select
                  value={form.service}
                  onChange={(e) =>
                    setForm({ ...form, service: e.target.value })
                  }
                  className={`${inputClass} ${!form.service ? "text-rose-400/60" : "text-rose-900"}`}
                >
                  {serviceOptions.map((opt, i) => (
                    <option
                      key={i}
                      value={i === 0 ? "" : opt}
                      disabled={i === 0}
                    >
                      {opt}
                    </option>
                  ))}
                </select>
                <textarea
                  required
                  rows={4}
                  placeholder={dict.formMessage}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className={`${inputClass} resize-none`}
                />
                <button
                  type="submit"
                  className="w-full bg-gold-600 hover:bg-gold-500 text-white font-semibold px-6 py-4 rounded-xl transition-colors shadow-lg shadow-gold-600/20"
                >
                  {dict.formSubmit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import type { Locale } from "@/i18n-config";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
};

const meta = {
  pt: {
    title: "Bella — Salão de Beleza, Carcavelos | Coloração, Madeixas & Tratamentos",
    description:
      "Salão de beleza em Carcavelos, Cascais. Especialistas em coloração, madeixas, balayage e tratamentos capilares. Kérastase & L'Oréal Professionnel. Marque já!",
    keywords:
      "cabeleireiro carcavelos, salão de beleza cascais, coloração, madeixas, balayage, tratamentos capilares, cabeleireiro linha cascais",
  },
  en: {
    title: "Bella — Hair Salon, Carcavelos | Colour, Highlights & Treatments",
    description:
      "Hair salon in Carcavelos, Cascais. Specialists in hair colour, highlights, balayage and hair treatments. Kérastase & L'Oréal Professionnel. Book now!",
    keywords:
      "hair salon carcavelos, hairdresser cascais, hair colour, highlights, balayage, hair treatments",
  },
};

const baseUrl = "https://bella-carcavelos.vercel.app";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Bella — Salão de Beleza",
  url: baseUrl,
  telephone: "+351912345678",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Example 123",
    addressLocality: "Carcavelos",
    postalCode: "2775-000",
    addressCountry: "PT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 38.6883,
    longitude: -9.335,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  areaServed: [
    "Carcavelos",
    "Parede",
    "Cascais",
    "Estoril",
    "São Domingos de Rana",
    "Oeiras",
  ],
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card",
};

export async function generateStaticParams() {
  return [{ locale: "pt" }, { locale: "en" }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const m = meta[locale] ?? meta.pt;

  return {
    title: m.title,
    description: m.description,
    keywords: m.keywords,
    openGraph: {
      title: m.title,
      description: m.description,
      url: `${baseUrl}/${locale}`,
      siteName: "Bella — Salão de Beleza",
      locale: locale === "pt" ? "pt_PT" : "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        pt: `${baseUrl}/pt`,
        en: `${baseUrl}/en`,
      },
    },
  };
}

export default async function LocaleLayout({ children }: Props) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

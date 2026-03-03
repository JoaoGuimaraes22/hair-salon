import { getDictionary } from "@/get-dictionary";
import type { Locale } from "@/i18n-config";
import Navbar from "@/app/components/Navbar/Navbar";
import HeroContent from "@/app/components/HeroContent/HeroContent";
import About from "@/app/components/About/About";
import Services from "@/app/components/Services/Services";
import Pricing from "@/app/components/Pricing/Pricing";
import Gallery from "@/app/components/Gallery/Gallery";
import Team from "@/app/components/Team/Team";
import Reviews from "@/app/components/Reviews/Reviews";
import Contact from "@/app/components/Contact/Contact";
import Footer from "@/app/components/Footer/Footer";
import BookingBar from "@/app/components/BookingBar/BookingBar";

type Props = {
  params: Promise<{ locale: Locale }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <Navbar dict={dict.navbar} locale={locale} />
      <main>
        <HeroContent dict={dict.hero} />
        <About dict={dict.about} />
        <Services dict={dict.services} />
        <Pricing dict={dict.pricing} />
        <Gallery dict={dict.gallery} />
        <Team dict={dict.team} />
        <Reviews dict={dict.reviews} />
        <Contact dict={dict.contact} />
      </main>
      <Footer dict={dict.footer} />
      <BookingBar dict={dict.bookingBar} />
    </>
  );
}

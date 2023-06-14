import Head from "next/head";
import CTA from "@/components/CTA/CTA";
import Hero from "@/components/HeroSection/Hero";
import Services from "@/components/ServicesSection/Services";
import About from "@/components/AboutSection/About";
import Quotation from "@/components/QuotationSection/Quotation";
import Reasons from "@/components/ReasonsSection/Reasons";
import CallForSchedule from "@/components/CallForScheduleSection/CallForSchedule";
import FAQ from "@/components/FAQSection/FAQ";
import Contact from "@/components/ContactSection/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title> Psicóloga Raquel Silveira</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Services />
      <About />
      <Quotation />
      <Reasons />
      <CallForSchedule />
      <FAQ />
      <Contact />
    </div>
  );
}

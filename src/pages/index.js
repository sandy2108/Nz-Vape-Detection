import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import Head from "next/head";
import Vapeworks from "@/components/Vapeworks";
import Testimonials from "@/components/Testimonials";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Head>
        <title>NZ Vape Detection Services</title>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Discover our comprehensive vape detection services in Auckland, NZ, offering exclusive solutions for schools, offices, colleges, apartments, and senior living facilities."
        />
        <meta name="keywords" content="Vape detection solutions Auckland, Vape detection systems NZ, Vape-free environments Auckland, Vape detection specialists, Compliant vape detection services, Advanced vape detection technology, Trusted vape detection provider, Expert vape detection solutions, Auckland vape detection company, Customized vape detection systems, Professional vape detection services, Reliable vape detection technology, Vape detection system installation, Vape detection services NZ, Compliance-assured vape detection, Custom vape detection solutions, Professional vape detection installation, Comprehensive vape detection services, Streamlined vape detection process, Customized vape detection solution design, Professional vape detection installation process, Compliance assurance with vape detection, Step-by-step vape detection implementation, Efficient vape detection system workflow, vape detection services, advanced vape detection systems, professional installation, compliance assistance, ongoing support, Auckland, NZ, exclusive, schools, offices, colleges, apartments, senior living facilities"/>

        <meta
          property="og:title"
          content="Vape Detection Services in Auckland, NZ | NZ Vape Detection"
        />
        <meta
          property="og:description"
          content="Explore our comprehensive vape detection services at NZ Vape Detection. We offer professional installation, maintenance, and support for vape detection systems in Auckland, NZ. Contact us to ensure a vape-free environment and compliance with regulations."
        />
      </Head>
      <Hero />
      <Intro />
      <Services />
      <Vapeworks />
      <Testimonials />
    </main>
  );
}

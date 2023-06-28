import Faqimage from "@/components/Faqimage";
import Faqsection from "@/components/Faqsection";
import Head from "next/head";
import React from "react";

export default function Faq() {
  return (
    <div>
      <Head>
        <title>
          Frequently Asked Questions (FAQ) - NZ Vape Detection | Auckland, NZ
        </title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Find answers to frequently asked questions about vape detection services in Auckland, NZ. Learn how NZ Vape Detection can help you ensure a vape-free environment, protect the health and safety of your premises, and comply with regulations. Get expert insights and solutions for schools, offices, colleges, apartments, and senior living facilities."
        />
        <meta
          name="keywords"
          content="vape detection FAQs Auckland, NZ, common questions about vape detection services, vape-free environment solutions Auckland, vape detection for schools, offices, colleges, apartments, senior living facilities, health and safety compliance with vape detection, expert insights on vape detection in Auckland, NZ, tamper-proof vape detection systems, ensuring a vape-free environment in Auckland, vape detection services for a safe workplace, compliance with vaping regulations in NZ"
        />
        <meta
          property="og:title"
          content="Frequently Asked Questions (FAQ) - NZ Vape Detection | Auckland, NZ"
        />
        <meta
          property="og:description"
          content="Find answers to frequently asked questions about vape detection services in Auckland, NZ. Learn how NZ Vape Detection can help you ensure a vape-free environment, protect the health and safety of your premises, and comply with regulations. Get expert insights and solutions for schools, offices, colleges, apartments, and senior living facilities."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nzvapedetection.com/faq" />
        <meta property="og:image" content="/Assests/logo1.png" />
      </Head>

      <Faqimage />
      <Faqsection />
    </div>
  );
}

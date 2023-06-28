
import Head from "next/head";
import VapeMarket from "@/components/VapeMarket";
import Markets from "@/components/Markets";

const Vape_markets = () => {
  return (
   <>
    <Head>
      <title>NZ Vape Detection | Vape Markets</title>
        <meta name="description" content="We provide tailored vape detection solutions for schools, colleges, apartments, senior living facilities, and offices throughout Auckland, NZ." />
        <meta property="og:title" content="Our Vape Detection Solutions for Schools, Colleges, Apartments, Senior Living, and Offices" />
        <meta property="og:description" content="At NZ Vape Detection, we provide tailored vape detection solutions for schools, colleges, apartments, senior living facilities, and offices throughout Auckland, NZ." />
        <meta name="keywords" content="vape detection, schools, colleges, apartments, senior living, offices, vape detection solutions, schools, colleges, apartments, senior living, offices, vape-free environment, advanced systems, students' health, compliance, conducive learning environment, safeguard residents, apartment complexes, healthy living space, smoke-free policies, residents' safety, professional workspace, productive workspace, smoke-free workplace, air quality, occupational health and safety regulations, market expansion opportunities, other markets, industries, specific requirements" />
    </Head>
    <VapeMarket/>
    <Markets/>
   </>
  );
}

export default Vape_markets;
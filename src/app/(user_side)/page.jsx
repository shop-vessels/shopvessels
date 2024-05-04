import dynamic from "next/dynamic";

import HeroSection from "./_components/herosection/herosection";
const ResetClassesMain = dynamic(() =>
  import("./_components/resetClasses/restClassesMain")
);
const TrendingMain = dynamic(() =>
  import("./_components/trendingClasses/trendingMain")
);
const OfferMain = dynamic(() => import("./_components/offer/offerMain"));
const Hum = dynamic(() => import("./_components/hum/hum"));
const Practice = dynamic(() => import("./_components/practice/practice"));
const FaqsMain = dynamic(() => import("./_components/faqs/faqsMain"));
const JoinNow = dynamic(() => import("./_components/joinNow/joinNow"));

export const metadata = {
  title: "A transformative 40-day journey to spiritual enlightenment",
  description:
    "Genesis is our foundational offering, designed to ground individuals in key understandings that enhance their lives and expand their self-awareness. Starting here ensures you can show up in the world as your most effective self. While we offer a variety of vessels, we encourage the community to begin with Genesis, as its name suggests—the beginning",
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ResetClassesMain />
      {/* <TrendingMain /> */}
      <OfferMain />
      <Hum />
      <Practice />
      <FaqsMain />
      <JoinNow />
    </main>
  );
}

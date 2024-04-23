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
  title:
    "Flexible Yoga Classes for Any Schedule: Strength-Building & Restorative Practices",
  description:
    "Pause and practice yoga anytime, anywhere. Choose from strength-building flows to restorative practices tailored for busy, full lives. Discover classes that align with your schedule and changing responsibilities",
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ResetClassesMain />
      <TrendingMain />
      <OfferMain />
      <Hum />
      <Practice />
      <FaqsMain />
      <JoinNow />
    </main>
  );
}

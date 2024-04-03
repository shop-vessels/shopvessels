import dynamic from "next/dynamic";

const HeroSection = dynamic(() =>
  import("./_components/heroSection/herosection")
);
const TrendingMain = dynamic(() =>
  import("./_components/trendingClasses/trendingMain")
);
const WeRaboutMain = dynamic(() =>
  import("./_components/weRabout/weRaboutMain")
);
const OfferMain = dynamic(() => import("./_components/offer/offerMain"));
const Hum = dynamic(() => import("./_components/hum/hum"));
const Practice = dynamic(() => import("./_components/practice/practice"));

export default function Home() {
  return (
    <main>
      {/* <HeroSection /> */}
      <TrendingMain />
      <WeRaboutMain />
      <OfferMain />
      <Hum />
      <Practice />
    </main>
  );
}

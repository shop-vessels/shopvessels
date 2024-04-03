import dynamic from "next/dynamic";

const HeroSection = dynamic(() =>
  import("./_components/heroSection/herosection")
);
const TrendingMain = dynamic(() =>
  import("./_components/trendingClasses/trendingMain")
);
// import HeroSection from "./_components/heroSection/page";

export default function Home() {
  return (
    <main>
      {/* <HeroSection /> */}
      <TrendingMain />
    </main>
  );
}

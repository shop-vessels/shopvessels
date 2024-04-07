import dynamic from "next/dynamic";

const HeroSection = dynamic(() =>
  import("./_components/herosection/herosection")
);
// const CollectionMain = dynamic(() =>
//   import("./_components/collection/collectionMain")
// );
const ResetClassesMain = dynamic(() =>
  import("./_components/resetClasses/restClassesMain")
);
const TrendingMain = dynamic(() =>
  import("./_components/trendingClasses/trendingMain")
);
const OfferMain = dynamic(() => import("./_components/offer/offerMain"));
const ClassesMain = dynamic(() => import("./_components/classes/classesMain"));
const Hum = dynamic(() => import("./_components/hum/hum"));
const Practice = dynamic(() => import("./_components/practice/practice"));
const FaqsMain = dynamic(() => import("./_components/faqs/faqsMain"));
const JoinNow = dynamic(() => import("./_components/joinNow/joinNow"));

export default function Home() {
  return (
    <main>
      <HeroSection />
      {/* <CollectionMain /> */}
      <ResetClassesMain />
      <TrendingMain />
      <OfferMain />
      <ClassesMain />
      <Hum />
      <Practice />
      <FaqsMain />
      <JoinNow />
    </main>
  );
}

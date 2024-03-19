import React, { lazy, Suspense } from "react";

const HeroSection = lazy(() => import("./_components/heroSection/page"));
const TrustedGuiedMain = lazy(() =>
  import("./_components/trustedGuiedVideo/page")
);
const Offercard = lazy(() => import("./_components/offerCard/page"));
const AsSeen = lazy(() => import("./_components/asSeen/page"));
const GardenMain = lazy(() => import("./_components/garden/page"));
const BlogMain = lazy(() => import("./_components/blogs/page"));
const Cart = lazy(() => import("./_components/cart/page"));
const CommunityCard = lazy(() => import("./_components/communityCard/page"));
const KickstarterMain = lazy(() => import("./_components/kickStarter/page"));
const PartnerMain = lazy(() => import("./_components/partners/page"));
const TravelJournal = lazy(() => import("./_components/travelJournal/page"));
const TravelCard = lazy(() => import("./_components/travelCard/page"));

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
        <TrustedGuiedMain />
        <Offercard />
        <AsSeen />
        <GardenMain />
        <BlogMain />
        <Cart />
        <CommunityCard />
        <KickstarterMain />
        <PartnerMain />
        <TravelJournal />
        <TravelCard />
      </Suspense>
    </main>
  );
}

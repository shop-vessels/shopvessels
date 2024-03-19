import dynamic from "next/dynamic";

// const HeroSection = dynamic(() => import("./_components/heroSection/page"));
import HeroSection from "./_components/heroSection/page";

const TrustedGuiedMain = dynamic(() =>
  import("./_components/trustedGuiedVideo/page")
);
const Offercard = dynamic(() => import("./_components/offerCard/page"));
const AsSeen = dynamic(() => import("./_components/asSeen/page"));
const GardenMain = dynamic(() => import("./_components/garden/page"));
const BlogMain = dynamic(() => import("./_components/blogs/page"));
const Cart = dynamic(() => import("./_components/cart/page"));
const CommunityCard = dynamic(() => import("./_components/communityCard/page"));
const KickstarterMain = dynamic(() => import("./_components/kickStarter/page"));
const PartnerMain = dynamic(() => import("./_components/partners/page"));
const TravelJournal = dynamic(() => import("./_components/travelJournal/page"));
const TravelCard = dynamic(() => import("./_components/travelCard/page"));

export default function Home() {
  return (
    <main>
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
    </main>
  );
}

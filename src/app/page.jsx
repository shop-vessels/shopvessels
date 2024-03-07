import HeroSection from "./_components/hero_section/page";
import TrustedGuiedMain from "./_components/trustedGuiedVideo/page";
import Offercard from "./_components/offer_card/page";
import AsSeen from "./_components/as_seen/page";
import GardenMain from "./_components/garden/page";
import BlogMain from "./_components/blogs/page";
import Cart from "./_components/cart/page";
import CommunityCard from "./_components/community_card/page";
import PartnerMain from "./_components/partners/page";
import TravelJournal from "./_components/travel_journal/page";
import TravelCard from "./_components/travel_card/page";

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
      <CommunityCard />s
      <PartnerMain />
      <TravelJournal />
      <TravelCard />
    </main>
  );
}

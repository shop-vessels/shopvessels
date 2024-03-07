import HeroSection from "./_components/heroSection/page";
import TrustedGuiedMain from "./_components/trustedGuiedVideo/page";
import Offercard from "./_components/offerCard/page";
import AsSeen from "./_components/asSeen/page";
import GardenMain from "./_components/garden/page";
import BlogMain from "./_components/blogs/page";
import Cart from "./_components/cart/page";
import CommunityCard from "./_components/communityCard/page";
import KickstarterMain from "./_components/kickStarter/page";
import PartnerMain from "./_components/partners/page";
import TravelJournal from "./_components/travelJournal/page";
import TravelCard from "./_components/travelCard/page";

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

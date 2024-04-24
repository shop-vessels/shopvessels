import HumHomeimg from "../../../../public/images/ourValues/humHome.jpg";
import Image from "next/image";

const humHome = () => {
  return (
    <div className="lg:py-24 py-3 lg:px-24 px-5 flex lg:flex-row flex-col lg:gap-0 gap-7 max-w-7xl m-auto">
      <div className="w-full text-foreground/65 self-center lg:text-start text-center lg:pr-16">
        <p className="md:text-3xl text-2xl">Honoring your journey</p>
        <p className="mt-4 lg:text-lg text-base lg:w-full lg:px-0 sm:px-20 ">
          Our retreats transcend mere physical practice, providing a sanctuary
          from the hustle and bustle of daily life. We demand a judgment-free
          space, embracing individuals at every stage of their mental health
          journey. Joining our community, means knowing you&apos;re supported through
          life&apos;s challenges. Our events offer thoughtful, practical experiences
          in carefully curated settings.
        </p>
      </div>
      <div className="w-full ">
        <Image
          src={HumHomeimg}
          width={520}
          height={520}
          alt="image"
          className="m-auto"
        />
      </div>
    </div>
  );
};

export default humHome;

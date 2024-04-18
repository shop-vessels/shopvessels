import cultureimg from "../../../../public/images/ourValues/culture.jpg";
import Image from "next/image";

const culture = () => {
  return (
    <div className="min-h-full relative h-full overflow-hidden py-20">
      <Image
        src={cultureimg}
        fill
        alt="image"
        className=" object-cover w-full max-h-full"
      />
      <div className="flex justify-center items-center h-full w-full md:px-5 px-3  ">
        <div className="text-center text-foreground/65 border max-w-2xl   bg-white z-10 min-h-screen py-16 md:px-16 px-5 ">
          <p className="md:text-4xl text-3xl ">Our Culture</p>
          <p className="font-semibold text-lg">OUR MISSION</p>

          <p className="md:text-lg text-base">
            We're a warm and inclusive community dedicated to exploring the
            fundamental truth that we are spiritual beings navigating human
            experiences. Through mindfulness practices, we honor each other,
            making connections and holding conversations in safe, respectful
            spaces. We embrace diversity and welcome everyone on the path to the
            universal truth, &lsquo;everyone is you, having a different
            experience&rsquo;.
          </p>
          <p className="font-semibold md:text-lg text-base mt-6">Our Values</p>
          <ul className="">
            <li className="mt-1">
              <span className="font-semibold md:text-lg text-base">
                Our philosophy
              </span>{" "}
              is &lsquo;Vessels&rsquo; are curated collections that elevate.
              They are thoughtfully{" "}
              <span className="font-semibold md:text-lg text-base">
                bundled products, courses, experiences,
              </span>{" "}
              and tools designed to nurture your mental well-being. We keep our
              offerings fresh through a rotating product line. Our courses
              provide valuable knowledge, while the products transform you into
              a practitioner.
            </li>
            <li className="mt-1">
              <span className="font-semibold md:text-lg text-base">
                Honoring your journey{" "}
              </span>
              Our retreats transcend mere physical practice, providing a
              sanctuary from the hustle and bustle of daily life. We demand a
              judgment-free space, embracing individuals at every stage of their
              mental health journey. Joining our community, means knowing you're
              supported through life's challenges. Our events offer thoughtful,
              practical experiences in carefully curated settings.
            </li>
          </ul>
          <p className="font-semibold md:text-lg text-base mt-6">OUR PILLARS</p>
          <ul className="">
            <li className="mt-1">
              <span className="font-semibold md:text-lg text-base">UNITY</span>{" "}
              We practice and cultivate a sense of interconnectedness,
              celebrating diversity and inclusion as we come together on our
              shared journey of self-discovery and growth.
            </li>
            <li className="mt-1">
              <span className="font-semibold md:text-lg text-base">
                INNOVATION
              </span>{" "}
              We are pioneers, continuously exploring new frontiers and
              pioneering groundbreaking approaches to holistic wellness and
              personal development, always seeking to inspire and evolve the
              community.
            </li>
            <li className="mt-1">
              <span className="font-semibold md:text-lg text-base">
                EMPOWERMENT
              </span>{" "}
              We equip individuals to take charge of their well-being, providing
              tools, knowledge, and guidance to foster resilience and
              self-empowerment.
            </li>
            <li className="mt-1">
              <span className="font-semibold md:text-lg text-base">
                HARMONY
              </span>{" "}
              We seek balance and harmony in every facet of life, nurturing a
              holistic approach that integrates mind, body, and spirit to
              promote overall well-being and fulfillment.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default culture;

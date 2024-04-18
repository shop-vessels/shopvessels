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
            We are a friendly & welcoming community who are passionate about
            sparking curiosity, conversation & connection through the practices
            of yoga. We are committed to creating safe spaces that are inclusive
            & respectful of a diverse community.
          </p>
          <p className="font-semibold md:text-lg text-base mt-6">OUR VALUES</p>
          <ul className="">
            <li className="mt-1">
              <span className="font-semibold md:text-lg text-base">LOVE</span>{" "}
              is our underlying frequency. We have a genuine love for people &
              are passionate about uniting humanity through the practices of
              yoga.{" "}
            </li>
            <li className="mt-1">
              <span className="font-semibold md:text-lg text-base">
                COMMUNITY{" "}
              </span>
              Our people (team and students) are at the core of what we do, we
              strive to learn new perspectives by listening to, learning from &
              educating our community.{" "}
            </li>
            <li className="mt-1">
              <span className="font-semibold md:text-lg text-base">
                LEARNING
              </span>{" "}
              We use physical practice to spark conversation, curiosity &
              connection to the body, mind & spirit. We aim to cultivate sacred
              space for diverse bodies through intentional movement &
              mindfulness.{" "}
            </li>
            <li className="mt-1">
              <span className="font-semibold md:text-lg text-base">
                THE INDIVIDUAL JOURNEY
              </span>{" "}
              We aim to give you space to explore through the various aspects of
              yoga & then journey back with a newfound sense of self-connection
              & appreciation for yourself & others.{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default culture;

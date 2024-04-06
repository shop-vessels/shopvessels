import cultureimg from "../../../../public/images/ourValues/culture.jpg";
import Image from "next/image";

const culture = () => {
  return (
    <div className="relative h-full overflow-hidden">
      <Image
        src={cultureimg}
        width={1300}
        height={1300}
        alt="image"
        className=" h-full object-cover max-w-full"
      />
      <div className="flex justify-center items-center h-full w-full px-5 z-10">
        <div className="text-center text-foreground/65 border max-w-2xl mx-auto bg-white z-20 min-h-screen p-16">
          <p className="md:text-4xl text-3xl ">Our Culture</p>
          <p className="font-semibold text-lg">OUR MISSION</p>

          <p className="text-lg">
            We are a friendly & welcoming community who are passionate about
            sparking curiosity, conversation & connection through the practices
            of yoga. We are committed to creating safe spaces that are inclusive
            & respectful of a diverse community.
          </p>
          <p className="font-semibold text-lg mt-6">OUR VALUES</p>
          <ul>
            <li className="mt-1">
              <span className="font-semibold text-lg">LOVE</span> is our
              underlying frequency. We have a genuine love for people & are
              passionate about uniting humanity through the practices of yoga.{" "}
            </li>
            <li className="mt-1">
              <span className="font-semibold text-lg">COMMUNITY </span>Our
              people (team and students) are at the core of what we do, we
              strive to learn new perspectives by listening to, learning from &
              educating our community.{" "}
            </li>
            <li className="mt-1">
              <span className="font-semibold text-lg">LEARNING</span> We use
              physical practice to spark conversation, curiosity & connection to
              the body, mind & spirit. We aim to cultivate sacred space for
              diverse bodies through intentional movement & mindfulness.{" "}
            </li>
            <li className="mt-1">
              <span className="font-semibold text-lg">
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

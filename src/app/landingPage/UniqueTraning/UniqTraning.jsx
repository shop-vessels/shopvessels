import UniqueCards from "./UniqueCards/UniqueCards";
import UniqueTraning from "../../../data/UniqueTraning.json";

const ModernScience = () => {
  return (
    <div className="md:p-16 p-6    ">
      <div className="text-center text-foreground/55   lg:px-16">
        <p className="md:text-4xl text-xl font-semibold ">
          THIS UNIQUE TRAINING TO BECOME A CERTIFIED MEDICINE PRACTITIONER
          COMBINES ANCIENT SHAMANIC WISDOM WITH MODERN SCIENCE
        </p>
        <p className="lg:mt-8 mt-4 font-thin text-lg">
          Alberto Villoldo &apos; s life-long wisdom, and holistic training
          methodologies are crafted to bridge the divide between where you stand
          today and who you truly wish to be.
        </p>
      </div>
      <div className="lg:flex gap-2  lg:mx-0 m-auto mt-7  w-full">
        {UniqueTraning.map((traning, index) => (
          <UniqueCards
            key={index}
            image={traning.image}
            title={traning.title}
            description={traning.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ModernScience;

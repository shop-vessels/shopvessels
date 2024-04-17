import experienceimg from "../../../../public/images/ourValues/experience.jpg";
import Image from "next/image";

const experience = () => {
  return (
    <div className="py-24 lg:px-0 sm:px-20 px-5 flex lg:flex-row flex-col-reverse lg:gap-0 gap-7 max-w-7xl m-auto">
      <div className="w-full ">
        <Image
          src={experienceimg}
          width={380}
          height={380}
          alt="image"
          className="m-auto"
        />
      </div>
      <div className="w-full text-foreground/65 self-center lg:text-start text-center">
        <p className="md:text-3xl text-2xl">Curating an experience</p>
        <p className="mt-4 lg:text-lg text-base lg:w-10/12">
          More than just the physical practice, our spaces offer a journey of
          sensations that contrast a fast- paced outside world. Be warmly
          received into our lounge area, sanctorius bathrooms and sacred shala;
          all an expressive nod to thoughtful and practical design. To receive
          our hospitality in person, our studio spaces reside in Melbourne,
          Sydney and New York.
        </p>
      </div>
    </div>
  );
};

export default experience;

import experienceimg from "../../../../public/images/ourValues/experience.png";
import Image from "next/image";

const experience = () => {
  return (
    <div className="py-24 lg:px-0 sm:px-20 px-5 flex lg:flex-row flex-col-reverse lg:gap-0 gap-7 max-w-7xl m-auto">
      <div className="w-full ">
        <Image
          src={experienceimg}
          width={520}
          height={520}
          alt="image"
          className="m-auto"
        />
      </div>
      <div className="w-full text-foreground/65 self-center lg:text-start text-center">
        <p className="md:text-3xl text-2xl">Curating an experience</p>
        <p className="mt-4 lg:text-lg text-base lg:w-10/12">
          We understand that &apos;doing the work&apos; leads to major life
          shifts for the better, and we want to be part of our community&apos;s
          journey from healing to thriving. With your support, we&apos;ll
          achieve our vision together.
        </p>
      </div>
    </div>
  );
};

export default experience;

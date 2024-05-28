import experienceimg from "../../../../../public/images/ourValues/experience.jpg";
import Image from "next/image";

const experience = () => {
  return (
    <div className="py-6 px-6 lg:px-0 mt-10 grid lg:grid-cols-2 gap-3 max-w-7xl m-auto">
      <div className="order-2 lg:order-none aspect-video w-full overflow-hidden relative ">
        <Image
          src={experienceimg}
          fill
          alt="image"
          className="m-auto w-full object-cover rounded-md"
        />
      </div>
      <div className=" lg:px-10 px-5 py-6 text-foreground/65 self-center lg:text-start text-center">
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

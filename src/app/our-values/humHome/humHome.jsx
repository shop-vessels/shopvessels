import HumHomeimg from "../../../../public/images/ourValues/humHome.jpg";
import Image from "next/image";

const humHome = () => {
  return (
    <div className="lg:py-24 py-3 lg:px-24 px-5 flex lg:flex-row flex-col lg:gap-0 gap-7">
      <div className="w-full text-foreground/65 self-center lg:text-start text-center ">
        <p className="md:text-3xl text-2xl">Take the Hum home</p>
        <p className="mt-4 lg:text-lg text-base lg:w-full lg:px-0 sm:px-20 ">
          The variety of classes on Humming Puppy On Demand, cover everyone from
          the beginner to the well-versed yogi. Alongside our regular class
          styles, we offer specialised practices and cater for both the
          traditional and the experimental. Humming Puppy On Demand allows for
          global participation. Yoga and guidance can now be accessed amongst
          homes luxuries.
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

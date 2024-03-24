import Image from "next/image";
import image from "./image/wakefuljournal-32.webp";
import Link from "next/link";

const page = () => {
  return (
    <div className="">
      <div className=" relative w-full aspect-[21/9] group  overflow-hidden flex items-center justify-center">
        <Image
          fill
          src={image}
          alt="image"
          className=" aspect-video w-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="text-white text-center relative z-10">
          <h1 className="font-bold text-white  text-4xl lg:text-7xl">
            FAQ&apos;s
          </h1>
          <p className="mt-2 text-2xl font-bold text-white/80">
            Commonly Asked Quesions
          </p>
        </div>
      </div>
      <div className="p-5 lg:p-10 max-w-5xl mt-5 lg:mt-10 text-foreground/80 border-l border-r mx-auto">
        <h2 className="text-2xl lg:text-4xl font-bold ">
          Frequently Asked Questions
        </h2>
        <p className="lg:text-lg mt-2">Most commonly asked questions</p>
        <h2 className="font-medium mt-10 lg:text-3xl text-xl">
          How long will it take to get a journal shipped to me?
        </h2>
        <p className="mt-2 lg:text-lg text-sm  text-foreground/60">
          You&apos;ll typically receive your journal within 4-6 business days.
        </p>
        <h2 className="text-xl mt-6 lg:text-3xl font-medium  ">
          Will I be charged for customs and import tax?
        </h2>
        <p className="mt-2 lg:text-lg text-sm  text-foreground/60">
          Since journals are have the HS Code of 490199, often times you
          won&apos;t pay an additional fee, however, we cannot guarantee it.
          Import taxes, duties and related customs fees may be charged depending
          on your country. These charges are determined by the customs office of
          the specific destination. Payment of these charges and taxes is the
          responsibility of the recipient and will not be covered by Wakeful
          Travel. For further details of charges, please contact your local
          customs office.{" "}
        </p>
        <h2 className="mt-6 font-medium  lg:text-3xl text-xl">
          What if my journal is damaged when it arrives?
        </h2>
        <p className="lg:text-lg text-sm mt-2">
          Get in{" "}
          <Link href="/" className="border-b border-black">
            contact with Wakeful Travel
          </Link>{" "}
          ASAP and explain the situation.
        </p>
      </div>
    </div>
  );
};

export default page;

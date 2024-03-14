import Image from "next/image";
import image from "./image/wakefuljournal-32.webp";
import Link from "next/link";

const page = () => {
  return (
    <div className="md:p-12 p-4 ">
      <p className="text-center lg:text-3xl text-2xl">FAQ`&apos;`s</p>
      <Image
        width={1200}
        height={1200}
        src={image}
        alt="image"
        className="mt-6 mb-9"
      />
      <p className=" lg:text-3xl text-xl">
        How long will it take to get a journal shipped to me?
      </p>
      <p className="mt-6 mb-6 lg:text-lg text-sm">
        You`&apos;`ll typically receive your journal within 4-6 business days.
      </p>
      <p className="lg:text-3xl text-xl">
        Will I be charged for customs and import tax?
      </p>
      <p className="mt-6 lg:text-lg text-sm">
        Since journals are have the HS Code of 490199, often times you
        won`&apos;`t pay an additional fee, however, we cannot guarantee it.
        Import taxes, duties and related customs fees may be charged depending
        on your country. These charges are determined by the customs office of
        the specific destination. Payment of these charges and taxes is the
        responsibility of the recipient and will not be covered by Wakeful
        Travel. For further details of charges, please contact your local
        customs office.{" "}
      </p>
      <p className="mt-6 lg:text-3xl text-xl">
        What if my journal is damaged when it arrives?
      </p>
      <p className="lg:text-lg text-sm mt-6">
        Get in{" "}
        <Link href="/" className="border-b border-black">
          contact with Wakeful Travel
        </Link>{" "}
        ASAP and explain the situation.
      </p>
    </div>
  );
};

export default page;

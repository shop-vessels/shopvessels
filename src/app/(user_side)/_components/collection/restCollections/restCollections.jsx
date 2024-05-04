import { Button } from "@/components/ui/button";
import Image from "next/image";
import image from "../../../../../public/images/restCollections/image.png";

const restCollections = () => {
  return (
    <div className="text-foreground/65 flex justify-center py-20">
      <div className="max-w-[1000px]  md:p-12 sm:p-8 p-4 w-full flex lg:flex-row flex-col justify-center items-center bg-foreground/5 lg:gap-24 md:gap-12 gap-7 rounded-lg">
        <div className="">
          <p className="text-3xl font-semibold">OUR RESET COLLECTIONS</p>
          <p className="lg:w-[400px] mt-5 md:text-lg text-foreground/55">
            Embark on a journey of self-discovery with our curated collection of
            online yoga resets. Each collection is designed to help you nourish,
            nurture, and grow a specific element of your practice. You will
            receive 7 classes of varying lengths and styles to choose from,
            providing you with a wide variety of options to enhance your yoga
            experience.
          </p>
          <Button className="md:text-xl py-6 sm:w-auto w-full mt-9 text-foreground/55">
            EXPLORE THE INVERSION COLLECTION
          </Button>
        </div>
        <div className="">
          <Image
            src={image}
            width={1200}
            height={1200}
            alt="image"
            className="lg:rounded-none rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default restCollections;

import rating1 from "../../../../public/images/landingPage/qutation/rating1.jpg";
import rating2 from "../../../../public/images/landingPage/qutation/rating2.jpg";
import bazar from "../../../../public/images/landingPage/qutation/bazar.jpg";
import Image from "next/image";

const Qutation = () => {
  return (
    <div>
      <div className="md:p-16 p-8 bg-foreground/5">
        <p className="lg:px-16  lg:text-3xl md:text-lg text-base  text-center tracking-wider">
          <i>
            “THIS TRAINING IS A LIFE-CHANGER. IT&appos;S THE BEST INVESTMENT
            I&appos;VE EVER MADE IN MY LIFE.”
          </i>
        </p>
        <p className="text-base text-center mt-2"> &mdash;PETER, ENGLAND</p>
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 justify-around items-center pt-14">
          <Image src={rating1} width={450} height={450} alt="image" />
          <Image src={rating2} width={450} height={450} alt="image" />
        </div>
      </div>
      <div className="bg-[#688f78] lg:px-16 px-3 py-4">
        <p className="text-center text-xl text-white">FEATURED IN</p>
        <Image
          src={bazar}
          width={550}
          height={550}
          alt="image"
          className="mx-auto "
        />
      </div>
    </div>
  );
};

export default Qutation;

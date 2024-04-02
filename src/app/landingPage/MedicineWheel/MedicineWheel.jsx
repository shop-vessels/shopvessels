import Image from "next/image";
import bgimage from "../../../../public/images/landingPage/medicine_wheel/Background.jpg";
import wheel from "../../../../public/images/landingPage/medicine_wheel/wheel.png";

const MedicineWheel = () => {
  return (
    <div className="mt-10 relative text-white ">
      <Image
        src={bgimage}
        width={1400}
        height={1400}
        alt="image"
        className="bg-scroll"
      />
      <div className="absolute flex flex-col justify-center items-center top-0 w-full h-full">
        <p className="text-center text-4xl ">
          YOUR PATH THROUGH THE SHAMANIC MEDICINE WHEEL
        </p>
        <Image
          src={wheel}
          width={600}
          height={600}
          alt="image"
          className="bg-scroll"
        />
        <p>lorem800</p>
      </div>
    </div>
  );
};

export default MedicineWheel;

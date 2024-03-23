import { Button } from "@/components/ui/button";

const TrustedGuied = ({ video }) => {
  return (
    <div className=" w-full mt-5 lg:mt-10">
      <div className="text-center mb-5 px-16 py-11">
        <h2 className="text-4xl font-bold text-foreground/80">
          Your Trusted Guide
        </h2>
        <p className="text-lg max-w-2xl mx-auto mt-5 text-foreground/60">
          Wakeful Travel journals act as your trusted guide-whether it&apos;s
          externally-through local or world travel, or internally through
          psychedelic and plant medicine experiences.
        </p>
      </div>
      <div className="relative ">
        <video
          autoPlay
          muted
          preload="auto"
          className="brightness-90 object-cover aspect-[21/9] w-full"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 flex justify-center items-center w-full h-full">
          <Button className=" border-2 bg-transparent border-white px-3 py-2 rounded text-white ">
            SHOP NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TrustedGuied;

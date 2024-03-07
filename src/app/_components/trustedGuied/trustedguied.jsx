"use client";

const trustedguied = ({ video }) => {
  return (
    <div className="mt-16 mb-16 ">
      <div className="text-center mb-5 px-16 py-11">
        <p className="text-3xl">Your Trusted Guide</p>
        <p className="text-lg">
          Wakeful Travel journals act as your trusted guide–whether it's
          externally–through local or world travel, or internally through
          psychedelic and plant medicine experiences.
        </p>
      </div>
      <div className="relative">
        <video
          autoPlay
          muted
          preload="auto"
          width="1280"
          className="brightness-90"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 flex justify-center items-center w-full h-full">
          <button className=" border-2 border-white px-3 py-2 rounded text-white ">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default trustedguied;

const TrustedGuied = ({ video }) => {
  return (
    <div className=" mb-16 w-full">
      <div className="text-center mb-5 px-16 py-11">
        <p className="text-3xl font-bold">Your Trusted Guide</p>
        <p className="text-lg max-w-lg mx-auto">
          Wakeful Travel journals act as your trusted guide-whether it's
          externally-through local or world travel, or internally through
          psychedelic and plant medicine experiences.
        </p>
      </div>
      <div className="relative aspect-[21/9]">
        <video
          autoPlay
          muted
          preload="auto"
          
          className="brightness-90 object-cover"
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

export default TrustedGuied;

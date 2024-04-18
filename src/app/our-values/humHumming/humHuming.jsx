import hummingvideo from "/video/hummingvide.mp4";

const humHuming = () => {
  return (
    <div className="lg:p-20">
      <div className="flex justify-center items-center flex-col h-full w-full px-5 z-10">
        <div className="text-center text-foreground/65 max-w-3xl mx-auto bg-white z-20 min-h-screen lg:px-12 py-12 ">
          <p className="md:text-4xl text-3xl ">The Hum in Humming Puppy</p>

          <p className="text-base mt-4">
            Humming Puppy offers a revered space to practice and one that
            reverberates with a Hum in place of music. A soundscape that
            combines both digital and organic sound frequencies; specifically
            7.83hz and 40hz. By immersing yourself in these soundwaves during
            practice the brain naturally produces the same frequencies through
            the process of entrainment.
          </p>
          <p className="text-base mt-7">
            7.83hz is known as the Schumann Resonance and mimics the frequency
            of the earth itself, assisting in restoring the mind to a state of
            equilibrium. 40hz is specifically associated with Gamma brainwave
            activity and integral for achieving states of peak performance.
          </p>
          <p className="text-base mt-7">
            Our Hum was designed in collaboration with our co-Founders and
            composer Mitch Allen from One Two Studios. To produce a sound that
            acquainted itself comfortably in our Shalas, a recording was made
            from playing our own singing bowls.
          </p>
          <p className="text-base mt-7">
            Whilst this has an ornate complexity to it; we believe the Hum
            provides a singular and joyful experience alongside all of our
            offerings.
          </p>
        </div>
        <div>
          <video controls autoPlay preload="true" width={650} height={650}>
            <source src={hummingvideo} type="video/mp4" />
            <source src="hummingvideo.webm" type="video/webm" />{" "}
            {/* Add WebM source */}
          </video>
        </div>
      </div>
    </div>
  );
};

export default humHuming;

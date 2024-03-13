import { Input } from "@/components/ui/input";

const page = () => {
  return (
    <div className="lg:p-16 p-8">
      <p className="text-center md:text-3xl text-2xl">Contact Us</p>
      <p className="font-bold text-foreground/65 text-3xl mt-4">
        CONTACT WAKEFUL TRAVEL
      </p>
      <p className="text-2xl mt-4">We’d love to hear from you.</p>
      <div className="flex flex-col">
        <label htmlFor="name" className="mt-3 text-lg">
          Your Name*
        </label>
        <input
          type="text"
          id="name"
          className="border border-black/15 p-3 mt-3  bg-black/5
          "
        />
        <label htmlFor="email" className="mt-3 text-lg">
          Your Email Address*
        </label>
        <input
          type="email"
          id="email"
          className="border border-black/15 p-3 mt-3 bg-black/5"
        />
        <label htmlFor="text-area" className="mt-3 text-lg">
          Your Message...
        </label>
        <textarea
          name="textarea"
          id="teaxt-area"
          cols="10"
          rows="4"
          className="border border-black/15 p-3 mt-3  bg-black/5"
        ></textarea>
      </div>
      <button className="uppercase border border-primary px-4 py-2 text-primary mt-4">
        submit
      </button>
    </div>
  );
};

export default page;

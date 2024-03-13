import Image from "next/image";
import Link from "next/link";

const stories = ({ image, title, publishedAt, description }) => {
  return (
<<<<<<< HEAD
    <section className=" mx-auto border p-5 rounded-lg cursor-pointer hover:shadow-lg hover:scale-[1.01] transition-all">
      <div className="relative aspect-video rounded-md overflow-hidden">
        <Image
          src={image}
          fill
          alt="Image"
          className="w-full object-cover"
        />
      </div>
      <div>
        <h2 className="text-xl font-semibold py-2">{title}</h2>
=======
    <section className="max-w-7xl mx-auto flex justify-center items-center flex-col">
      <div className=" ">
        <Image
          src={image}
          width={650}
          height={400}
          alt="Image"
          className="w-"
        />
      </div>
      <div className="md:w-full w-[90%]">
        <p className="text-xl font-semibold py-2">{title}</p>
>>>>>>> sheraz
        <p className="py-4 text-black/45 text-sm">{publishedAt}</p>
        <p className="text-base font-normal line-clamp-3 opacity-70">
          {description}
        </p>
        <div className="pt-3">
          <Link
            href="/"
            className="tracking-widest text-sm hover:text-primary transition-all hover:underline border-black font-semibold"
          >
            Continue Reading
          </Link>
        </div>
      </div>
    </section>
  );
};

export default stories;

import Image from "next/image";

const Blog = ({ image, title, description }) => {
  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <Image
          src={image}
          width={400}
          height={400}
          alt="Image"
          className="w-full"
        />
      </div>
      <div>
        <p className="text-xl font-semibold py-2">{title}</p>
        <p className="text-base font-normal line-clamp-3 opacity-70">
          {description}
        </p>
        <div className="pt-3">
          <a
            href="#"
            className="uppercase tracking-widest text-sm border-b border-black font-semibold"
          >
            Continue reading
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;

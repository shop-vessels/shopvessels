import Image from "next/image";
import Link from "next/link";

const Blog = ({ image, title, description }) => {
  return (
    <section className="max-w-7xl mx-auto border p-5 rounded-lg hover:shadow-lg hover:scale-[1.01] transition-all cursor-pointer">
      <div className="aspect-video relative rounded-md overflow-hidden">
        <Image
          src={image}
          fill
          alt="Image"
          className="w-full object-cover"
        />
      </div>
      <div>
        <h2 className="text-xl font-semibold py-2 rounded-md ">{title}</h2>
        <p className="text-base font-normal line-clamp-3 text-foreground/60">
          {description}
        </p>
        <div className="pt-3">
          <Link
            href="/"
            className="uppercase tracking-widest text-sm font-semibold hover:text-primary transition-colors"
          >
            Continue reading
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, CirclePlay } from "lucide-react";
import Link from "next/link";

const Rest = ({ course }) => {
  const { title, category, level, description, image, coursePrice, _id } = course;

  return (
    <div className="pt-16 pb-5 md:px-8 px-4 text-foreground/65 grid lg:px-0 lg:grid-cols-2 grid-cols-1 lg:flex-row flex-col lg:gap-5 gap-6 max-w-7xl m-auto ">
      <div className="w-full h-full relative">
        <Image
          src={image}
          fill
          alt="image"
          className="rounded-md m-auto object-center object-cover w-full h-full"
        />
      </div>

      <div className="max-x-1/2 ">
        <p className="text-sm font-semibold flex items-center gap-1">
          {" "}
          <CirclePlay className="w-5" size={14} /> {category}
        </p>
        <h1 className="text-2xl font-bold mt-1">{title}</h1>
        <p className="text-sm font-light mt-2 lg:line-clamp-none line-clamp-2">
          {description}
        </p>
        {/* <p className="text-primary">Learn more</p> */}
        <div className="flex md:flex-row flex-col gap-2 mt-4 w-full relative">
          <Button
            className="lg:w-full"
            // onClick={showHide}
          >
            Subscribe and Watch <ChevronDown className="w- ml-1" />
          </Button>
          <Button className="bg-foreground/5 text-base hover:bg-card-foreground/10" asChild>
            <Link href={`/all-courses/${_id.toString()}/purchase`}>
            Buy ${coursePrice}
            </Link>
          </Button>

          {/* <div
            className={`border border-black/20 rounded-md  p-4 text-sm font-light absolute lg:-left-5 left-0 top-12 z-20 bg-white min-w-md md:w-auto w-full  ${
              membershipp ? "block" : "hidden"
            }`}
          >
            <p>Select a membership</p>
            <div className="flex flex-col gap-4 mt-2 z-20">
              {membership.map((memb, index) => (
                <Membership
                  key={index}
                  image={memb.image}
                  month={memb.month}
                  title={memb.title}
                  offer={memb.offer}
                  money={memb.money}
                />
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Rest;

// const Membership = ({ image, month, title, offer, money }) => {
//   return (
//     <div className="flex rounded-md border border-black z-20 sm:h-auto h-[120px]">
//       <Image
//         src={image}
//         alt="image"
//         width={130}
//         height={130}
//         className="rounded-md sm:w-auto w-40"
//       />
//       <div className="p-2 flex flex-col justify-center text-foreground/65 z-30">
//         <p className="text-primary text-sm">{month}</p>
//         <p className="font-light text-sm sm:block hidden">{title}</p>
//         <p className="font-medium sm:text-lg text-base md:mt-2">{offer}</p>
//         <p className="sm:text-sm text-xs font-light ">
//           AUD ${money}/month after trial
//         </p>
//       </div>
//     </div>
//   );
// };

export const dynamic = "force-dynamic";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CourseModel from "@/database/models/CourseModel";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ErrorBlock from "./_components/ErrorBlock";
import connectDB from "@/database/connectDatabase";

export const metadata = {
  title:
    "Yoga for Deep Relaxation & Inner Tranquility: Rest Collection at [Your Brand/Studio Name]",
  description:
    "Discover a curated selection of yoga practices for deep relaxation and inner tranquility. Find solace and unwind with our Rest Collection, designed to nurture well-being and guide you back to a peaceful state.",
};

const page = async () => {
  await connectDB();
  const courses = await CourseModel.find({}).lean().exec();

  return (
    <main>
      <header className="w-full py-10 flex justify-center items-center flex-col bg-foreground/5">
        <h1 className="font-bold text-2xl">All Courses</h1>
        <p>Here is the list of all courses</p>
      </header>

      {courses && courses.length > 0 ? (
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto py-10 px-5">
          {courses.map(
            ({ title, description, category, image, level, _id }) => (
              <Link href={`/all-courses/${_id}`}>
                <Card className="overflow-hidden" key={_id}>
                  <div className="relative w-full aspect-video">
                    <Image
                      fill
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2 text-xl">
                      {title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {description}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="text-xs gap-2 flex-wrap font-medium">
                    {level && (
                      <span className="bg-primary px-2 py-1 rounded-md">
                        {level}
                      </span>
                    )}
                    {category && (
                      <span className="bg-primary px-2 py-1 rounded-md">
                        {category}
                      </span>
                    )}
                  </CardFooter>
                </Card>
              </Link>
            )
          )}
        </section>
      ) : (
        <ErrorBlock
          code={404}
          title={"Currently No course is available"}
          desc={"Please visit later to enroll into course"}
        />
      )}
    </main>
  );
};

export default page;

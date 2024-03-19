import { ScrollText, SquareDot, SquarePen, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-foreground/80">Manage Courses</h1>
      <p className="mt-2 text-lg">
        Here you can create, update, delete courses
      </p>
      <div className="grid grid-cols-2 gap-10 mt-10">
        {[
          {
            title: "Create",
            link: "/dashboard/courses/create-new",
            icon: <SquarePen color="currentColor" size={30} />,
          },
          {
            title: "View All",
            link: "/dashboard/courses/create-new",
            icon: <ScrollText color="currentColor" size={30} />,
          },
          {
            title: "Update Course",
            link: "/dashboard/courses/create-new",
            icon: <SquareDot color="currentColor" size={30} />,
          },
          {
            title: "Delete Course",
            link: "/dashboard/courses/create-new",
            icon: <Trash2 color="currentColor" size={30} />,
          },
        ].map(({ title, link, icon }, ind) => (
          <Link href={link} key={ind}>
            <div className="bg-foreground/5 rounded-lg flex gap-5 px-5 py-7 hover:bg-primary transition-colors text-lg font-bold text-foreground/80 items-center">
              <span className="p-4 rounded-full bg-foreground/10">{icon}</span>
              {title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default page;

import React from "react";

import NavbarLinks from "@/data/Navbar.data.json";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

function NavLinks() {
  return (
    <nav className="h-full ml-10 hidden lg:block">
      <ul className="flex gap-7">
        {NavbarLinks.map((props, ind) => (
          <ListItem {...props} key={ind} />
        ))}
      </ul>
    </nav>
  );
}

const ListItem = ({ title, path, dropdown }) => {
  return (
    <li className="uppercase relative h-full py-3 group cursor-pointer ">
      <span className="flex  items-center">
        {path ? <Link href={path}>{title}</Link> : title}{" "}
        {dropdown && (
          <ChevronDown
            className="text-foreground/55 group-hover:rotate-180 transition-all"
            size={16}
          />
        )}
      </span>
      {dropdown && (
        <ul className="absolute hidden group-hover:block -left-5 top-full bg-background shadow-md">
          {dropdown.map(({ title, path }, ind) => (
            <li key={ind} className="w-max px-5 py-2 ">
              <Link href={path}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavLinks;

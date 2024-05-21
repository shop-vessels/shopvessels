import { ChevronLeft, ChevronRight, Menu, MenuIcon, X } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import navbarData from "@/data/Navbar.data.json";
import Link from "next/link";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <MenuIcon />
      </Button>
      <div
        className={`w-full h-full fixed inset-0 bg-foreground/60 top-0 ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIsOpen((prev) => !prev)}
          className="absolute z-50 right-10 top-5"
        >
          <X />
        </Button>
        <Sidebar handleOpen={setIsOpen} />
      </div>
    </div>
  );
}

const Sidebar = ({ handleOpen }) => {
  return (
    <aside className="min-w-80 h-full left-0 bg-background text-foreground relative overflow-y-auto overflow-x-hidden">
      <Link
        href={"/"}
        className="px-5 py-10 font-bold text-lg lg:text-xl border-b border-b-border flex"
      >
        Shop Vessels
      </Link>

      <ul className="relative w-[95%]">
        {navbarData.map((props, ind) => (
          <MobileListItem {...props} handleOpen={handleOpen} key={ind} />
        ))}
      </ul>
      <div className="uppercase ml-auto flex flex-col gap-2 w-full px-4 py-5">
        <UserChip />
        <Button asChild className="w-full">
          <Link href="/signup">Join Now</Link>
        </Button>
      </div>
    </aside>
  );
};

const MobileListItem = ({ title, path, dropdown, handleOpen }) => {
  const [isSidebarShown, setSetshowSideBar] = useState(false);
  return (
    <li
      className="px-5 border-b border-b-border cursor-pointer overflow-x-hidden hover:bg-foreground/5 transition-colors"
      onClick={() => !dropdown && handleOpen(false)}
    >
      {path ? (
        <Button
          asChild
          variant="link"
          className="w-full flex justify-start hover:no-underline text-muted-foreground"
        >
          <Link
            href={path}
            onClick={() => handleOpen(false)}
            className="w-full h-full flex  py-5 px-5"
          >
            {title}{" "}
          </Link>
        </Button>
      ) : (
        <Button
          variant="link"
          className="w-full flex py-5 px-5 h-full justify-between hover:no-underline text-muted-foreground"
          onClick={() => setSetshowSideBar(true)}
          // className="flex justify-between items-center py-5 px-5"
        >
          {title} {dropdown && <ChevronRight className="text-foreground/60" />}
        </Button>
      )}

      {dropdown && (
        <div
          className={`absolute top-0 h-full w-full transition-all bg-background ${
            isSidebarShown ? "left-0" : "left-full"
          }`}
          // onClick={() => handleOpen(false)}
        >
          <div
            className="flex justify-between px-5 py-5 border-b border-b-border"
            onClick={() => setSetshowSideBar((prev) => !prev)}
          >
            <ChevronLeft />

            <span>Back</span>
          </div>
          <ul className="">
            {dropdown.map(({ title, path }, ind) => (
              <Button
                variant="link"
                className="w-full hover:bg-muted flex justify-start hover:no-underline items-center h-full text-muted-foreground"
                asChild
                onClick={() => handleOpen(false)}
              >
                <Link
                  key={ind}
                  href={path}
                  className="w-full px-5 py-5 border-b border-b-border"
                >
                  <li className="">{title}</li>
                </Link>
              </Button>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default MobileNav;

const UserChip = () => {
  return (
    <Button asChild className="bg-primary border-2 border-primary">
      <Link href="/login"> Login</Link>
    </Button>
  );
};

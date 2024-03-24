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
        <Sidebar handleOpen={setIsOpen}/>
      </div>
    </div>
  );
}

const Sidebar = ({handleOpen}) => {
  return (
    <aside className="min-w-96 h-full left-0 bg-background text-foreground relative">
      <Link
        href={"/search"}
        className="px-5 py-10 border-b border-b-border flex"
      >
        Search
      </Link>
      <ul className="relative h-full w-full overflow-auto">
        {navbarData.map((props, ind) => (
          <MobileListItem {...props} handleOpen={handleOpen} key={ind} />
        ))}
      </ul>
    </aside>
  );
};

const MobileListItem = ({ title, path, dropdown, handleOpen }) => {
  const [isSidebarShown, setSetshowSideBar] = useState(false);
  return (
    <li className="px-5 py-5 border-b border-b-border cursor-pointer" onClick={()=> !dropdown && handleOpen(false)}>
      {path ? (
        <Link href={path}>{title} </Link>
      ) : (
        <span
          onClick={() => setSetshowSideBar(true)}
          className="flex justify-between items-centerz"
        >
          {title} {dropdown && <ChevronRight className="text-foreground/60" />}
        </span>
      )}

      {dropdown && (
        <div
          className={`absolute top-0 h-full w-full transition-all bg-background ${
            isSidebarShown ? "left-0" : "left-full"
          }`}
          onClick={()=> handleOpen(false)}
        >
          <div
            className="flex justify-between px-5 py-5 border-b border-b-border"
            onClick={() => setSetshowSideBar((prev) => !prev)}
          >
            <ChevronLeft />

            <span>Back</span>
            <span></span>
          </div>
          <ul className="">
            {dropdown.map(({ title, path }, ind) => (
              <li key={ind} className="px-5 py-5 border-b border-b-border">
                <Link href={path}>{title} </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default MobileNav;

"use client";

import React, { useState } from "react";
import navimg from "./images/logo(4).png";
import { Menu, ChevronDown, ChevronUp, X } from "lucide-react";
import listItem from "../../../../data/listItem.json";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <div className="bg-[#de9e27] py-3 text-sm text-center font-semibold tracking-wider ">
        <p>$5 USD STANDARD SHIPPING — LIMITED TIME</p>
      </div>
      <div className="bg-white  flex justify-between text-sm shadow-lg lg:px-0 px-8 font-semibold tracking-wider">
        <div className="lg:pl-6 self-center">
          <img src={navimg} alt="Nav-Image" className="w-16 " />
        </div>
        <nav
          className={`  lg:px-8 self-center lg:static absolute top-0 bg-white lg:w-full w-[50%]   lg:transition-none transition-all ease-in-out lg:duration-0 duration-700 z-10 ${
            toggle ? "left-0" : "-left-full "
          } `}
        >
          <ul
            className={`${
              toggle ? "lg:flex" : "hidden "
            } justify-between items-center  lg:gap-2 text-xs `}
          >
            <div className="lg:hidden block ">
              <a
                href="#"
                onClick={() => setToggle(!toggle)}
                className="flex justify-end"
              >
                <X className="w-8 h-8" />
              </a>
            </div>
            {listItem.map(({ text, dropdown }, index) => {
              if (dropdown) {
                return (
                  <ListItemDropDown
                    text={text}
                    options={dropdown.options}
                    key={index}
                  />
                );
              } else {
                return <ListItem text={text} key={index} />;
              }
            })}
          </ul>
        </nav>
        <div className="lg:hidden self-center ">
          <a href="#" onClick={() => setToggle(!toggle)}>
            <Menu className="w-8 h-8 " />
          </a>
        </div>
      </div>
    </div>
  );
};

const ListItem = ({ text }) => (
  <li className="flex items-center lg:border-none border-b-2">
    <a href="#" className="text-black rounded-md text-sm p-3">
      {text}
    </a>
  </li>
);

const ListItemDropDown = ({ text, options }) => {
  return (
    <li className="relative dropdown group lg:border-none border-b-2 bg-white">
      <a href="#" className="text-black rounded-md text-sm p-3 flex ">
        {text}
        <ChevronDown className="block group-hover:hidden" />
        <ChevronUp className="hidden group-hover:block" />
      </a>
      <ul className="dropdown-menu absolute z-10 lg:bg-white bg-slate-100 w-full hidden group-hover:block transition-all ease-in-out duration-1000">
        {options.map((str, index) => (
          <ListItem text={str} key={index} />
        ))}
      </ul>
    </li>
  );
};

export default Nav;

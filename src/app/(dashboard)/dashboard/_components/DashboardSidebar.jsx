import DashboardSideBarLinks from "@/data/dashboard/DashboardSideBarLinks";
import Link from "next/link";
import React from "react";

const DashboardSidebar = () => {
  return (
    <aside className="w-full max-w-sm  border-r-2 py-5 lg:py-10 flex flex-col">
      <div className="px-5">
        <h2 className="text-3xl text-foreground/80 font-bold">Dashboard</h2>
        <p>Manage your website with ease</p>
      </div>

      <ul className="flex-grow overflow-y-auto max-h-[500px] border-t flex flex-col pt-5 mt-5 px-2">
        {DashboardSideBarLinks.map(({ title, link, icon }, ind) => (
          <li
            key={ind}
            className="w-full flex items-center gap-2 px-4 cursor-pointer text-lg border-b-2 font-semibold text-foreground/75 hover:bg-primary rounded-md transition-colors  py-5"
          >
            <Link
              href={link}
              className="w-full flex gap-4 items-center leading-[0]"
            >
              {icon} {title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default DashboardSidebar;

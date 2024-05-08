import { Button } from "@/components/ui/button";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default function DashboardGlobalNavbar() {
  return (
    <header className="w-full h-max  px-5 lg:px-10 flex justify-between items-center py-5 border-b shadow-md">
      <Link href={"/dashboard"} className="font-bold text-lg  flex gap-2 items-center">
        <LayoutDashboard/> {" "} Dashboard
      </Link>
      <nav className="flex">
        <ul className="flex gap-2">
          <NavLink title={"Blogs"} href={"/dashboard/blogs"} />
          <NavLink title={"Courses"} href={"/dashboard/courses"} />
          <NavLink title={"Users"} href={"/dashboard/users"} />
        </ul>
      </nav>
      <LogoutButton />
    </header>
  );
}

const NavLink = ({ href, title }) => {
  return (
    <li>
      <Button asChild variant="link" className="text-foreground/80 hover:text-foreground/90 transition-colors">
        <Link
          href={href}
          className="text-lg"
        >
          {title}
        </Link>
      </Button>
    </li>
  );
};

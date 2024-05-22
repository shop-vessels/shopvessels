import { Button } from "@/components/ui/button";
import { LayoutDashboard, Menu } from "lucide-react";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DashboardGlobalNavbar() {
  return (
    <header className="w-full h-max  px-5 lg:px-10 flex justify-between items-center py-5 border-b shadow-md">
      <Link
        href={"/dashboard"}
        className="font-bold text-lg  flex gap-2 items-center"
      >
        <LayoutDashboard /> Dashboard
      </Link>
      <nav className="flex">
        <ul className=" gap-2 hidden lg:flex">
          <NavLink title={"Blogs"} href={"/dashboard/blogs"} />
          <NavLink title={"Courses"} href={"/dashboard/courses"} />
          <NavLink title={"Users"} href={"/dashboard/users"} />
        </ul>
        <DropdownMenu >
          <DropdownMenuTrigger className="lg:hidden">
            
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="px-3 pb-3 lg:hidden">
            <DropdownMenuLabel>Pages</DropdownMenuLabel>
            <DropdownMenuItem>
              <Link href={"/dashboard/blogs"}>Blogs</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/dashboard/courses"}>Courses</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href={"/dashboard/users"}>Users</Link>
            </DropdownMenuItem>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            <LogoutButton />
          </DropdownMenuContent>
        </DropdownMenu>
      </nav>
      <span className="hidden lg:flex items-center justify-center w-max">
        <LogoutButton />
      </span>
    </header>
  );
}

const NavLink = ({ href, title }) => {
  return (
    <li>
      <Button
        asChild
        variant="link"
        className="text-foreground/80 hover:text-foreground/90 transition-colors"
      >
        <Link href={href} className="text-lg">
          {title}
        </Link>
      </Button>
    </li>
  );
};

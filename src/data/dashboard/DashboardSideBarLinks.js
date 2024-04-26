import { Home, MessageSquareText, SquareLibrary, Store, Users } from "lucide-react";

const DashboardSideBarLinks = [
  {
    title: "Home",
    link: "/dashboard",
    icon: <Home />,
  },
  {
    title: "Courses",
    link: "/dashboard/courses",
    icon: <SquareLibrary />,
  },
  // {
  //   title: "Stores",
  //   link: "/dashboard/stores",
  //   icon: <Store />,
  // },
  {
    title: "Blogs",
    link: "/dashboard/blogs",
    icon: <MessageSquareText />,
  },
  {
    title: "Users",
    link: "/dashboard/users",
    icon: <Users />,
  },
];

export default DashboardSideBarLinks;

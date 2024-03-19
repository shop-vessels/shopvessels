import { Home, MessageSquareText, SquareLibrary, Store } from "lucide-react";

export default DashboardSideBarLinks = [
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
  {
    title: "Stores",
    link: "/dashboard/stores",
    icon: <Store />,
  },
  {
    title: "Blogs",
    link: "/dashboard/blogs",
    icon: <MessageSquareText />,
  },
];

import { AiFillHome } from "react-icons/ai";
import { GoDatabase } from "react-icons/go";
import { MdOutlineLibraryBooks } from "react-icons/md";

const sidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
  },
  {
    title: "Database",
    path: "/database",
    icon: <GoDatabase />,
  },
  {
    title: "Reports",
    icon: <MdOutlineLibraryBooks />,
    subMenu: [
      {
        title: "Report1",
        path: "/report1",
      },
      {
        title: "Report2",
        path: "/report2",
      },
      {
        title: "Report3",
        path: "/report3",
      },
    ],
  },
];

export default sidebarData;

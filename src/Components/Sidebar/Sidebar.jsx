import { useState } from "react";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

import "./Sidebar.scss";
import sidebarData from "./SidebarData";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
  const [expand, setExpand] = useState(true);

  return (
    <div className={expand ? "sidebar" : "sidebar close"}>
      <div className="sidebar-top">
        <div className="logo">EB-Toolkit</div>
        <div className="expand-btn" onClick={() => setExpand(!expand)}>
          {expand ? (
            <BsFillArrowLeftSquareFill />
          ) : (
            <BsFillArrowRightSquareFill />
          )}
        </div>
      </div>
      <div className="sidebar-links">
        {sidebarData.map((data, index) => (
          <div key={index}>
            <SidebarLink data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

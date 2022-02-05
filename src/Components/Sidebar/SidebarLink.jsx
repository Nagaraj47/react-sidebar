import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

const SidebarLink = ({ data }) => {
  const [opan, setOpan] = useState(false);

  return (
    <>
      {data.subMenu ? (
        <>
          <div
            className={opan ? "sidebar-item open" : "sidebar-item"}
            onClick={() => setOpan(!opan)}
          >
            <div className="icon">{data.icon}</div>
            <div className="title">{data.title}</div>
            <div className="toggle-btn">
              {opan ? <MdExpandLess /> : <MdExpandMore />}
            </div>
          </div>
          <div className={opan ? "submenu expand" : "submenu"}>
            {data.subMenu.map((subitem, index) => (
              <NavLink to={subitem.path} key={index} className="subitem">
                <div className="title">{subitem.title}</div>
              </NavLink>
            ))}
          </div>
        </>
      ) : (
        <NavLink to={data.path} className="nav-link">
          <div className="sidebar-item">
            <div className="icon">{data.icon}</div>
            <div className="title">{data.title}</div>
          </div>
        </NavLink>
      )}
    </>
  );
};

export default SidebarLink;

import "./Layout.scss";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Layout;

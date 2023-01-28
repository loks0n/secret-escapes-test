import { Outlet } from "react-router-dom";
import Nav from "./Nav";

function MainLayout() {
  return (
    <div id="app" className="container">
      <Nav />
      <hr />
      <Outlet />
    </div>
  );
}

export default MainLayout;

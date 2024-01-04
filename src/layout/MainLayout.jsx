import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="container mx-auto">
      <h1>navbar</h1>
      <Outlet />
    </div>
  );
};

export default MainLayout;

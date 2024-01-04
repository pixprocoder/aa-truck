import { Outlet } from "react-router-dom";
import HeaderPage from "../components/shared/Header";

const MainLayout = () => {
  return (
    <div className="container mx-auto">
      <HeaderPage />
      <Outlet />
    </div>
  );
};

export default MainLayout;

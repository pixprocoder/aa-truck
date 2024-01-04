import { Outlet } from "react-router-dom";
import HeaderPage from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <div className="container mx-auto">
      <HeaderPage />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;

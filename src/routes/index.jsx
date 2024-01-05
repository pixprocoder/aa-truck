import { createBrowserRouter } from "react-router-dom";

import Home from "../components/Home";
import MainLayout from "../layout/MainLayout";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Blog from "../components/blog/Blog";
import OurService from "../components/our-service/OurService";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/our-service",
        element: <OurService />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";

import Home from "../components/Home";
import MainLayout from "../layout/MainLayout";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Blog from "../components/blog/Blog";

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

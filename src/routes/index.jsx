import { createBrowserRouter } from "react-router-dom";

import Home from "../components/Home";
import MainLayout from "../layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
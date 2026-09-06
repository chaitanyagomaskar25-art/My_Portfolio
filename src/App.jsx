import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import Layout from "./layout/layout";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/certificates",
        element: <Certificates />,
      },

      
    ],
  },
]);

export default routes;

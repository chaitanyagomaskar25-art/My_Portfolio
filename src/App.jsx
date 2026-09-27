import React from "react";
import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";
import Layout from "./layout/layout";
import ProjectDetails from "./pages/ProjectsDetails";
import CertificateDetails from "./pages/CertificateDetails";
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
        path: "/projects/:id",
        element: <ProjectDetails />,
      },
      {
        path: "/certificates",
        element: <Certificates />,
      },
      {
        path: "/certificates/:id",
        element: <CertificateDetails />,
      },

      
    ],
  },
]);

export default routes;

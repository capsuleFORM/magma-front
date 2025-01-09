// Base layout
import BaseLayout from "../layout/Base";

// Pages
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import ProjectDetail from "../pages/ProjectDetail";
import Contacts from "../pages/Contacts";
import About from "../pages/About";
import Services from "../pages/Services";
import Errors from "../pages/Errors";

const Routes = [
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <Errors />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/projects/:projectId",
        element: <ProjectDetail />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
];

export default Routes;

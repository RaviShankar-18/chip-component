import {
  createBrowserRouter,
  Router,
  RouterProvider,
  Link,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const router = createBrowserRouter([
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
]);

function ComponentsRoutes() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default ComponentsRoutes;

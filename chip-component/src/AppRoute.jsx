import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="/about">About Us</Link>
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <h2>Go to Home page</h2>
        <Link to="/">Home</Link>
      </div>
    ),
  },
]);

const AppRoute = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRoute;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
} from "./pages";
import { loader as landingLoader } from "./pages/loaders/loaderLanding";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cocktail",
        element: <Cocktail />,
      },
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;

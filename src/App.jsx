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
import { loader as singleCocktailLoader } from "./pages/loaders/loaderSingleCocktail";
import SinglePageError from "./pages/SinglePageError";
import { action as newsletterAction } from "./pages/actions/actionNewsletter";

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
        path: "/cocktail/:id",
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader,
        element: <Cocktail />,
      },
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: <SinglePageError />,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
        action: newsletterAction,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;

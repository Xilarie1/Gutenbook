import App from "../App";
import Home from "../pages/Home";
import Category from "../pages/Category";
import BookDetails from "../pages/BookDetails";
import Favorites from "../pages/Favorites";

const routes = [
  {
    path: "/",
    element: <App />, // App will contain the Header and <Outlet />
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "category/:categoryName",
        element: <Category />,
      },
      {
        path: "book/:bookId",
        element: <BookDetails />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
    ],
  },
];

export default routes;

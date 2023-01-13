import Blogs from "../../Pages/Blogs/Blogs";
import CategoryProduct from "../../Pages/Home/Category/CategoryProduct/CategoryProduct";
import LogIn from "../../Pages/LogIn/LogIn";
import SignUp from "../../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main/Main");
const { default: Home } = require("../../Pages/Home/Home");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/categories/:id",
        element: <CategoryProduct></CategoryProduct>,
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/categories/${params.id}`);
        },
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

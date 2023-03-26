import { createBrowserRouter } from "react-router-dom";
import Main from "../../LayOut/Main";
import Catagory from "../../Pages/Catagory/Catagory/Catagory";
import Home from "../../Pages/Home/Home/Home";
import News from "../../Pages/News/News/News";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/catagory/:id", element: <Catagory></Catagory> },
      { path: "/news/:id", element: <News></News> },
    ],
  },
]);

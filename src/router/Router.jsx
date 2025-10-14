import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../components/Home";
import AddCoffee from "../components/AddCoffee";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <h3>404 Erro</h3>,
    children: [
      {
        path: "/",
        loader: ()=> fetch("http://localhost:3000/coffees"),
        element: <Home></Home>,
      },
      {
        path: "addcoffee",
        element: <AddCoffee></AddCoffee>,
      },
    ],
  },
]);

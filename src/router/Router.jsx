import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../components/Home";
import AddCoffee from "../components/AddCoffee";
import AddCups from "../components/AddCups";
import NewCups from "../components/NewCups";
import CoffeeDetails from "../components/CoffeeDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <h3>404 Erro</h3>,
    children: [
      {
        path: "/",
        loader: () => fetch("http://localhost:3000/coffees"),
        element: <Home></Home>,
      },
      {
        path: "addcoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "addcup",
        element: <AddCups></AddCups>,
      },
      {
        path: "newcups",
        loader: () => fetch("http://localhost:3000/cups"),
        element: <NewCups></NewCups>,
      },
      {
        path: "coffees/:id",
        loader: ({params}) => fetch(`http://localhost:3000/coffees/${params.id}`),
        element: <CoffeeDetails></CoffeeDetails>,
      },
    ],
  },
]);

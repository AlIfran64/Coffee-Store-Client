import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root/Root";
import Home from "../Pages/Home/Home";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import CoffeeDetails from "../Pages/CoffeeDetails/CoffeeDetails";
import UpdateCoffee from "../Pages/UpdateCoffee/UpdateCoffee";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import Users from "../Components/Users/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch('https://coffee-store-server-ten-rosy.vercel.app/coffees'),
        hydrateFallbackElement:
          <div className='w-11/12 mx-auto flex justify-center items-center bg-white py-3 rounded-2xl'>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
      },
      {
        path: '/addCoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: '/coffeeDetails/:id',
        element: <CoffeeDetails></CoffeeDetails>,
        loader: ({ params }) => fetch(`https://coffee-store-server-ten-rosy.vercel.app/coffees/${params.id}`),
        hydrateFallbackElement:
          <div className='w-11/12 mx-auto flex justify-center items-center bg-white py-3 rounded-2xl'>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
      },
      {
        path: '/updateCoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`https://coffee-store-server-ten-rosy.vercel.app/coffees/${params.id}`),
        hydrateFallbackElement:
          <div className='w-11/12 mx-auto flex justify-center items-center bg-white py-3 rounded-2xl'>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/users',
        element: <Users></Users>,
        loader: () => fetch('https://coffee-store-server-ten-rosy.vercel.app/users'),
        hydrateFallbackElement:
          <div className='w-11/12 mx-auto flex justify-center items-center bg-white py-3 rounded-2xl'>
            <span className="loading loading-spinner loading-lg"></span>
          </div>
      }
    ]
  },
]);
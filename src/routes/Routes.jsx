import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../layout/Main";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import Dashboard from "../layout/Dashboard";
import AddHouse from "../pages/Dashboard/AddHouse/AddHouse";
import ManageHouse from "../pages/Dashboard/ManageHouse/ManageHouse";
import Home from "../pages/Home/Home/Home";
import BookHouse from "../pages/BookHouse/BookHouse";
import UpdateHouse from "../pages/Dashboard/ManageHouse/UpdateHouse";

  const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
          {
            path:'/',
            element:<Home></Home>
          },
            {
                path:'/register',
                element:<Registration></Registration>
            },
            {
              path:'/login',
              element:<Login></Login>
            },
            {
              path:'/houses/:id',
          element:<BookHouse></BookHouse>,
          loader:({params}) => fetch(`https://house-hunter-server-habibasabrina.vercel.app/houses/${params.id}`)
            }
        ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'addhouse',
          element:<AddHouse></AddHouse>
        },
        {
          path:'manage',
          element:<ManageHouse></ManageHouse>
        },
        {
          path:'update/:id',
          element:<UpdateHouse></UpdateHouse>,
          loader:({params}) => fetch(`https://house-hunter-server-habibasabrina.vercel.app/houses/${params.id}`)
        }
      ]
      
    }
  ])
  export default router;
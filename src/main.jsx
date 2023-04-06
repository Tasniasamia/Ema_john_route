import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Product from './Component/Product/Product';
import Order from './Component/Order/Order';
import Manage from './Component/Manage/Manage';
import Login from './Component/Login/Login';
import dataall from './Order';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Product></Product>,
      },
      {
        path:"/Order",
        element:<Order></Order>,
        loader:dataall,
      },
      {
        path:"/Manage",
        element:<Manage></Manage>,
      },{
        path:"/Login",
        element:<Login></Login>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />  
    </React.StrictMode>,
)

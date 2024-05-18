import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import Home from './HomePage/Home';
import AuthProvider from '../src/Components/UserManagement/AuthProvider';
import Login from './Components/UserManagement/Login';
import Register from './Components/UserManagement/Register';
import CheckOut from './Pages/CheckOutPage/CheckOut';
import Orders from './Pages/OrdersPage/Orders';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/checkout/:id",
        loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`),
        element: <CheckOut></CheckOut>
      },
      {
        path: "/orders",
        // loader: ({params})=>fetch(`http://localhost:5000/orders`),
        element: <Orders></Orders>
      },
      {
        path: "/checkout/:id",
        loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`),
        element: <CheckOut></CheckOut>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

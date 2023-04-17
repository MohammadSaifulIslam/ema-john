import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './assets/components/Shop/Shop';
import Orders from './assets/components/Orders/Orders'
import Login from './assets/components/Login/Login'
import Inventory from './assets/components/Inventory/Inventory'
import cartProductLoader from './loaders/cartProducLoader'
import Checkout from './assets/components/Checkout/Checkout';
import Register from './assets/components/Register/Register';
import AuthProvider from './providers/AuthProvider';
import PrivateRoutes from './routes/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:'/',
        element:<Shop></Shop>,
      },
      {
        path:"orders",
        element:<Orders></Orders>,
        loader: cartProductLoader
      },
      {
        path:'inventory',
        element:<Inventory></Inventory>
      },
      {
        path:'checkout',
        element:<PrivateRoutes><Checkout/></PrivateRoutes>
      },
      {
        path:'register',
        element:<Register/>
      },
      {
        path:'login',
        element:<Login></Login>
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

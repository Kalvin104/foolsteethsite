import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Layout from './routes/layout';
import Error from './components/error';
import Merch from './pages/merch';
import Gigs from './pages/gigs';


import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import Homepage from './components/homepage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Homepage />
      },
      {
        path: "merch",
        element: <Merch />
      },
      {
        path: "gigs",
        element: <Gigs />
      }
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

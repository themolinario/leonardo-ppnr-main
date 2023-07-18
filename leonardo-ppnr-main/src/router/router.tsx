import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout";
import Home from "../pages/home/home";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "*",
        element: <h1>Page not found</h1>
      }
    ]
  }
]);

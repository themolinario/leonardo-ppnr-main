import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import "typeface-lora";
import "typeface-roboto-mono";
import "typeface-titillium-web";

import { QueryClientCustomProvider } from "./config/query-client";
import "./index.css";
import { router } from "./router/router";

ReactDOM.render(
  <React.StrictMode>
    <QueryClientCustomProvider>
      <RouterProvider router={router} />
    </QueryClientCustomProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

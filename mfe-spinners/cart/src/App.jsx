import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import CartContent from "./components/CartContent";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContent />
    </BrowserRouter>
  </React.StrictMode>
);

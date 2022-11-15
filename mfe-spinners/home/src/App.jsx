import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import MainLayout from "home/MainLayout";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  </React.StrictMode>
);

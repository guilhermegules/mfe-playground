import React from "react";
import { createRoot } from "react-dom/client";

import "remixicon/fonts/remixicon.css";
import "./index.scss";

import { MainLayout } from "./layouts/MainLayout";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <MainLayout />
  </React.StrictMode>
);

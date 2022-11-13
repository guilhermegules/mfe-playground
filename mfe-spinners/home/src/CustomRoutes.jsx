import React from "react";
import { Route, Routes } from "react-router-dom";

import { HomeContent } from "./components/HomeContent/HomeContent";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomeContent />} />
    </Routes>
  );
};

export default CustomRoutes;

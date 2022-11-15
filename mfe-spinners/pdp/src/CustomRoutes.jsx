import React from "react";
import { Route, Routes } from "react-router-dom";

import PDPContent from "./components/PDPContent";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route exact path="/products/:id" element={<PDPContent />} />
    </Routes>
  );
};

export default CustomRoutes;

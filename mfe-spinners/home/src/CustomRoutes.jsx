import React from "react";
import { Route, Routes } from "react-router-dom";

import HomeContent from "home/HomeContent";
import PDPContent from "pdp/PDPContent";
import CartContent from "cart/CartContent";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomeContent />} />
      <Route path="/product/:id" element={<PDPContent />} />
      <Route path="/cart" element={<CartContent />} />
    </Routes>
  );
};

export default CustomRoutes;

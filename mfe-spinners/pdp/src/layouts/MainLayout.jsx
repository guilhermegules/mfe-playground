import React from "react";

import Header from "home/Header";
import Footer from "home/Footer";

export const MainLayout = () => {
  return (
    <div className="p-10">
      <Header title={"PDP content title"} />
      <p className="p-10">PDP content</p>
      <Footer />
    </div>
  );
};

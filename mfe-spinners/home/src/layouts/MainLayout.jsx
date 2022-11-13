import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import CustomRoutes from "../CustomRoutes";

export const MainLayout = () => {
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <Header title="Home title" />
      <div className="my-10">
        <CustomRoutes />
      </div>
      <Footer />
    </div>
  );
};

import React from "react";

import Header from "home/Header";
import Footer from "home/Footer";
import SafeComponent from "../components/SafeComponent";
import CustomRoutes from "../CustomRoutes";

export const MainLayout = () => {
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <SafeComponent>
        <Header title={"PDP content title"} />
      </SafeComponent>
      <div className="my-10">
        <CustomRoutes />
      </div>
      <SafeComponent>
        <Footer />
      </SafeComponent>
    </div>
  );
};

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Layouts from "./layouts/Layouts";

const AppRoutes = () => {
  return (
    <Layouts>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layouts>
  );
};

export default AppRoutes;

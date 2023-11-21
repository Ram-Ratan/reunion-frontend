import React from "react";
import Header from "./header/Header";

const Layouts = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="">{children}</div>
    </div>
  );
};

export default Layouts;

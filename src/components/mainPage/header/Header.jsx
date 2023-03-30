import React from "react";


import { HeaderCard } from "./HeaderCard";
import { HeaderLogo } from "./HeaderLogo";

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <HeaderLogo/>
        <HeaderCard/>
      </div>
    </div>
  );
};

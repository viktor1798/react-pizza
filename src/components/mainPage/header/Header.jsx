import React from "react";


import { HeaderLogo } from "./HeaderLogo";
import HeaderCardContainer from "./HeaderCardContainer";

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <HeaderLogo/>
        <HeaderCardContainer/>
      </div>
    </div>
  );
};

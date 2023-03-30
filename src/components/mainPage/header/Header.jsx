import React from "react";
import logoPizzaHeader from "../../../assets/pizza-logo.svg";

import { HeaderCard } from "./HeaderCard";

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width="38" src={logoPizzaHeader} alt="Pizza logo" />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <HeaderCard/>
      </div>
    </div>
  );
};

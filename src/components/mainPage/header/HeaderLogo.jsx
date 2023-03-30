import React from "react";
import { NavLink } from "react-router-dom";
import logoPizzaHeader from "../../../assets/pizza-logo.svg";

export const HeaderLogo = () => {
  return (

      <NavLink to='/' className="header__logo">
        <img width="38" src={logoPizzaHeader} alt="Pizza logo" />
        <div>
          <h1>React Pizza</h1>
          <p>самая вкусная пицца во вселенной</p>
        </div>
      </NavLink>
  );
};

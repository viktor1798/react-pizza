import React from "react";
import logoPizzaHeader from "../../assets/pizza-logo.svg";
import { NavLink } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <NavLink to={"/"} className="header__logo">
      <img width="38" src={logoPizzaHeader} alt="Pizza logo" />
      <div>
        <h1>React Pizza</h1>
        <p>самая вкусная пицца во вселенной</p>
      </div>
    </NavLink>
  );
};

export default HeaderLogo;

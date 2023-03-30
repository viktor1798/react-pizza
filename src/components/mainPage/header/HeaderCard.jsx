import React from "react";
import { NavLink } from "react-router-dom";
import basketImgHeader from "../../../assets/basket.svg";


export const HeaderCard = () => {
  return (
    <div className="header__cart">
      <NavLink className="button button--cart" to='/cart'>      
        <span>520 ₽</span>
        <div className="button__delimiter"></div>
        <img src={basketImgHeader} alt="" />
        <span>3</span>
      </NavLink>
    </div>
  );
};

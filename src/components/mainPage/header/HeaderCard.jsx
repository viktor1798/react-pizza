import React from "react";
import { NavLink } from "react-router-dom";
import basketImgHeader from "../../../assets/basket.svg";

export const HeaderCard = ({totalCount, totalPrice}) => {
  return (
    <div className="header__cart">
      <NavLink className="button button--cart" to='/cart'>      
        <span>{totalPrice}₽</span>
        <div className="button__delimiter"></div>
        <img src={basketImgHeader} alt="" />
        <span>{totalCount}</span>
      </NavLink>
    </div>
  );
};


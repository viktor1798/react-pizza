import React from "react";
import basketImgHeader from "../../../assets/basket.svg";

export const HeaderCard = () => {
  return (
    <div className="header__cart">
      <a href="/cart.html" className="button button--cart">
        <span>520 ₽</span>
        <div className="button__delimiter"></div>
        <img src={basketImgHeader} alt="" />
        <span>3</span>
      </a>
    </div>
  );
};

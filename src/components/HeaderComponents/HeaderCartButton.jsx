import React from "react";
import basketImgHeader from '../../assets/basket.svg'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


const HeaderCartButton = () => {
  const {items,totalPrice} = useSelector(state => state.card)
  
  const totalCount = items.reduce((sum,item)=> sum+item.count,0)

  return (
    <div className="header__cart">
      <NavLink className="button button--cart" to="/cart">
      
        <span>{totalPrice}₽</span>
        <div className="button__delimiter"></div>
        <img src={basketImgHeader} alt="" />
        <span>{totalCount}</span>
      </NavLink>
    </div>
  );
};

export default HeaderCartButton;

import React from "react";
import cartEmptyImage from '../../assets/empty-cart.png'
import { NavLink } from "react-router-dom";

export const BlankCard = () => {
  return (
        <div className="cart cart--empty">
            <h2>
              Корзина пустая <i>😕</i>
            </h2>
            <p>
              Вероятней всего, вы не заказывали ещё пиццу.
              <br />
              Для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={cartEmptyImage} alt="Empty cart" />
            <NavLink className='button button--black' to='/'>
              <span>Вернуться назад</span>
            </NavLink>

          </div>
  );
};


import React from "react";
import { ButtonAddPizza } from "./ButtonAddPizza";
import { ButtonSizeSelection } from "./ButtonSizeSelection";

export const PizzaBlock = () => {
  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
        alt="Pizza"
      />
      <h4 className="pizza-block__title">Чизбургер-пицца</h4>
      <ButtonSizeSelection/>
      <ButtonAddPizza/>
    </div>
  );
};

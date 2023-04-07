import React from "react";
import { ButtonAddPizza } from "./ButtonAddPizza";
import { ButtonSizeSelection } from "./ButtonSizeSelection";

export const PizzaBlock = ({imageUrl, name, sizes, price, types}) => {
  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src={imageUrl}
        alt="Pizza"
      />
      <h4 className="pizza-block__title">{name}</h4>
      <ButtonSizeSelection sizes={sizes} types={types} />
      <ButtonAddPizza price={price}/>
    </div>
  );
};

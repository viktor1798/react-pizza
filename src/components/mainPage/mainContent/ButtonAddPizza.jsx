import addPlusImg from "../../../assets/add-pluse.svg";
import React, { useState } from "react";

export const ButtonAddPizza = ({price,onAddPizzaCallback,addCount}) => {
  return (
    <div className="pizza-block__bottom">
      <div className="pizza-block__price">{`от ${price} ₽`}</div>
      <div
        onClick={() => onAddPizzaCallback()}
        className="button button--outline button--add"
      >
        <img src={addPlusImg} alt="" />
        <span>Добавить</span>
        {addCount && <i>{addCount.length }</i>}
      </div>
    </div>
  );
};

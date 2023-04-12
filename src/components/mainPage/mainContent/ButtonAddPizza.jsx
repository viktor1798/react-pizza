import addPlusImg from "../../../assets/add-pluse.svg";
import React, { useState } from "react";

export const ButtonAddPizza = ({price}) => {
  let [count, setCount] = useState(0);

  return (
    <div className="pizza-block__bottom">
      <div className="pizza-block__price">{`от ${price} ₽`}</div>
      <div
        onClick={() => setCount(++count)}
        className="button button--outline button--add"
      >
        <img src={addPlusImg} alt="" />
        <span>Добавить</span>
        <i>{count}</i>
      </div>
    </div>
  );
};
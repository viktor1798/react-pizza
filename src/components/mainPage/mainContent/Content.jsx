import React from "react";
import { Categories } from "./Categories";
import { PizzaBlock } from "./PizzaBlock";

export const Content = () => {
  const categoryArr = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  return (
    <div className="content">
      <div className="container">
        <Categories items={categoryArr} />
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          <PizzaBlock />
        </div>
      </div>
    </div>
  );
};

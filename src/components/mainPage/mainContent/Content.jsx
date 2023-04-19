import React from "react";
import { Categories } from "./Categories";
import { PizzaBlock } from "./PizzaBlock";

export const Content = ({pizzas, categoryArr}) => {

  return (
    <div className="content">
      <div className="container">
        <Categories items={categoryArr} />
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {pizzas.map((items)=> <PizzaBlock key={items.id} {...items} />)}

        </div>
      </div>
    </div>
  );
};

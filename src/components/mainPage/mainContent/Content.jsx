import React from "react";
import { Categories } from "./Categories";
import { PizzaBlock } from "./PizzaBlock";
import CategoriesContainer from "./CategoriesContainer";

export const Content = ({pizzas,itemsCard}) => {
  console.log(pizzas.map((items)=> itemsCard[items.id]|| itemsCard.length))
  return (
    <div className="content">
      <div className="container">
        <CategoriesContainer />
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {pizzas.map((items)=> <PizzaBlock addCount={itemsCard[items.id] && itemsCard[items.id].items.length} key={items.id} {...items} />)}
        </div>
      </div>
    </div>
  );
};

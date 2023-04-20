import React from "react";
import { Categories } from "./Categories";
import { PizzaBlock } from "./PizzaBlock";
import CategoriesContainer from "./CategoriesContainer";

export const Content = ({pizzas}) => {

  return (
    <div className="content">
      <div className="container">
        <CategoriesContainer />
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {pizzas.map((items)=> <PizzaBlock key={items.id} {...items} />)}

        </div>
      </div>
    </div>
  );
};

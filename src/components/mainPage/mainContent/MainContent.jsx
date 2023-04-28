import React from "react";
import { Route, Routes } from "react-router-dom";
import { CardBasket } from "../../cardBasket/CardBasket";
import { Content } from "./Content";

export const MainContent = ({pizzas,itemsCard}) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Content itemsCard={itemsCard} pizzas={pizzas}/>}/>
        <Route path="/cart" element={<CardBasket />} />
      </Routes>
    </div>
  );
};

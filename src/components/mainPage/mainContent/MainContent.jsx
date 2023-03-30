import React from "react";
import { Route, Routes } from "react-router-dom";
import { CardBasket } from "../../cardBasket/CardBasket";
import { Content } from "./Content";

export const MainContent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Content/>}/>
        <Route path="/cart" element={<CardBasket />} />
      </Routes>
    </div>
  );
};

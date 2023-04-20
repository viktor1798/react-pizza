import React, { useState } from "react";


import SortContainer from "./SortContainer";

export const Categories = ({ items,setStateCategory,category }) => {

  return (
    <div className="content__top">
      <div className="categories">
        <ul>
          {items &&
            items.map((name, index) => (
              <li
                className={category === index ? "active" : ""}
                onClick={() => setStateCategory(index)}
                key={index}
              >
                {name}
              </li>
            ))}
        </ul>
      </div>
    <SortContainer/>
    </div>
  );
};

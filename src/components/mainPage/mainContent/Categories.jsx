import React, { useState } from "react";
import { Sort } from "./Sort";

export const Categories = ({ items }) => {

  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="content__top">
      <div className="categories">
        <ul>
          {items &&
            items.map((name, index) => (
              <li
                className={activeItem === index ? "active" : ""}
                onClick={() => setActiveItem(index)}
                key={index}
              >
                {name}
              </li>
            ))}
        </ul>
      </div>
      <Sort />
    </div>
  );
};

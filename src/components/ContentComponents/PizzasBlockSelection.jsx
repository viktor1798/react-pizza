import classNames from "classnames";
import React, { useState } from "react";

const PizzasBlockSelection = ({ sizes,types, activeDough,setActiveDough,activeSize,setActiveSize,itemsDough,itemsSize}) => {


  const onSelectDough = (index) => {
    setActiveDough(index);
  };

  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  return (
    <div className="pizza-block__selector">
      <ul>
        {itemsDough.map((type, index) => (
          <li
            className={classNames({
              active: activeDough === index,
              disabled: !types.includes(index),
            })}
            onClick={() => onSelectDough(index)}
            key={type}
          >
            {type}
          </li>
        ))}
      </ul>
      <ul>
        {itemsSize.map((size, index) => (
          <li
            className={classNames({
              active:  activeSize===index || activeSize === size,
              disabled: !sizes.includes(size),
            })}
            onClick={() => onSelectSize(index)}
            key={size}
          >
            {`${size} см.`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PizzasBlockSelection;

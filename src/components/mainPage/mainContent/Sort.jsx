import React from "react";
import arrowTop from '../../../assets/arrow-top.svg'


export const Sort = () => {
  return (
    <div className="sort">
      <div className="sort__label">
        <img src={arrowTop} alt="" />
        <b>Сортировка по:</b>
        <span>популярности</span>
      </div>
      <div className="sort__popup">
        <ul>
          <li className="active">популярности</li>
          <li>цене</li>
          <li>алфавиту</li>
        </ul>
      </div>
    </div>
  );
};

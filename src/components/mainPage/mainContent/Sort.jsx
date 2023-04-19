import React from "react";
import arrowTop from "../../../assets/arrow-top.svg";

const Sort = ({activeItem,items,sortRef, visibleSort, activeSpanLabel, selectItem, setVisibleSort}) => {
  
  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <img src={arrowTop} alt="" />
        <b>Сортировка по:</b>
        <span onClick={() => setVisibleSort(!visibleSort)}>{activeSpanLabel}</span>
      </div>
      {visibleSort && (
        <div className="sort__popup">
          <ul>
            {items &&
             items.map((obj, index) => (
                <li
                  className={activeItem === index ? "active" : ""}
                  onClick={() => selectItem(index)}
                  key={`${obj.type}_${index}`}
                >
                  {obj.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};


export default Sort;
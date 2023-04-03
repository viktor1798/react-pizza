import React, { useEffect, useRef, useState } from "react";
import arrowTop from "../../../assets/arrow-top.svg";

export const Sort = () => {
  const items = ["популярности", "цене", "алфавиту"];

  const [visibleSort, setVisibleSort] = useState(false);
  const sortRef = useRef();
  const [activeItem, setActiveItem] = useState(0);

  const activeSpanLabel = items[activeItem];

  const handleOutsideClick = (el) => {
    if (!el.composedPath().includes(sortRef.current)) {
      setVisibleSort(false);
    }
  };

  const selectItem = (i) => {
    setActiveItem(i);
    setVisibleSort(false);
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);
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
              items.map((name, index) => (
                <li
                  className={activeItem === index ? "active" : ""}
                  onClick={() => selectItem(index)}
                  key={index}
                >
                  {name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

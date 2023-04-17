import React, { useEffect, useRef, useState } from "react";
import arrowTop from "../../../assets/arrow-top.svg";

import { connect } from "react-redux";

const Sort = (props) => {

  const [visibleSort, setVisibleSort] = useState(false);
  const sortRef = useRef();
  const [activeItem, setActiveItem] = useState(0);

  const activeSpanLabel = props.items[activeItem].name;

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
            {props.items &&
              props.items.map((obj, index) => (
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

const mapStateToProps=(state)=>{
  return{
    items: state.sort.itemsSort
  }
}

export default connect(mapStateToProps)(Sort)
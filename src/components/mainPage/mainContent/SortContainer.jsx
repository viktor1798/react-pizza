import React, { useEffect, useRef, useState } from "react";
import Sort from "./Sort";
import { connect } from "react-redux";
import { compose } from "redux";

const SortContainer = (props) => {

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
    <>
     <Sort activeItem={activeItem} items={props.items} sortRef={sortRef} visibleSort={visibleSort} activeSpanLabel={activeSpanLabel} selectItem={selectItem} setVisibleSort={setVisibleSort}/>
    </>
  );
};

const mapStateToProps=(state)=>{
  return{
    items: state.sort.itemsSort
  }
}

export default compose (connect(mapStateToProps)(React.memo(SortContainer)))
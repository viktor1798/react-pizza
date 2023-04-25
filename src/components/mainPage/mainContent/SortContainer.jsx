import React, { useCallback, useEffect, useRef, useState } from "react";
import Sort from "./Sort";
import { connect } from "react-redux";
import { compose } from "redux";
import { setStateSortBy } from "../../../redux/reducers/sort-reducer";

const SortContainer = ({items, sortBy, setStateSortBy}) => {

  const [visibleSort, setVisibleSort] = useState(false);
  const sortRef = useRef();
  const activeSpanLabel = items.find((obj)=>obj.type === sortBy.type).name;

  const handleOutsideClick = (el) => {
    if (!el.composedPath().includes(sortRef.current)) {
      setVisibleSort(false);
    }
  };

  const setStateSortByCallback =useCallback((type)=>setStateSortBy(type))

  const selectItem = (i) => {
    if(setStateSortByCallback){
      setStateSortByCallback(i)
    }
    setVisibleSort(false);
  };

  
  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  
  return (
    <>
     <Sort  sortBy={sortBy.type} items={items} sortRef={sortRef} visibleSort={visibleSort} activeSpanLabel={activeSpanLabel} selectItem={selectItem} setVisibleSort={setVisibleSort}/>
    </>
  );
};

const mapStateToProps=(state)=>{
  return{
    sortBy: state.sort.sortBy,  
    items: state.sort.itemsSort
  }
}

export default compose (connect(mapStateToProps, {setStateSortBy})(React.memo(SortContainer)))
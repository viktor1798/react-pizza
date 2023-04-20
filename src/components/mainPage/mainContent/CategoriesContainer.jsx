import React, { useCallback } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Categories } from "./Categories";
import { setStateCategory } from "../../../redux/reducers/filter-reduser";

const CategoriesContainer = (props) => {

  const categoryArr = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const setStateCategoryCallback =  useCallback((i)=>props.setStateCategory(i))

  return (
    <>
     <Categories items={categoryArr} setStateCategory={setStateCategoryCallback} category={props.category}/>
    </>
  );
};

const mapStateToProps=(state)=>{
  return{
    category: state.filter.category
  }
} 

export default compose(connect(mapStateToProps, {setStateCategory})(CategoriesContainer))
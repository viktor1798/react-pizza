import React, { useCallback } from "react";
import { ButtonAddPizza } from "./ButtonAddPizza";
import { connect } from "react-redux";
import { compose } from "redux";
import { addPizzaToCardState } from "../../../redux/reducers/card-reduser";

const ButtonAddPizzaContainer = ({name,id ,price , itemsSize,imageUrl,itemsDough,activeDough,activeSize,addCount,addPizzaToCardState}) => {
    
  const onAddPizza = ()=>{
    const obj={
      id,
      name,
      imageUrl,
      price,
      type:itemsDough[activeDough],
      size: itemsSize[activeSize],
    }
    addPizzaToCardState(obj)
  }
  return (
    <>
     <ButtonAddPizza addCount={addCount} onAddPizzaCallback={onAddPizza} price={price}/>
    </>
  );
};

const mapStateToProps=(state)=>{
  return{
    items: state.card.items
  }
}


export default compose( connect(mapStateToProps,{addPizzaToCardState})(React.memo(ButtonAddPizzaContainer)))

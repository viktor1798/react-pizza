import React from "react";
import { ButtonAddPizza } from "./ButtonAddPizza";
import { connect } from "react-redux";
import { compose } from "redux";
import { addPizzaToCardState } from "../../../redux/reducers/card-reduser";

const ButtonAddPizzaContainer = ({name,id, sizes ,price ,types, imageUrl,itemsSize,itemsDough,activeDough,activeSize}) => {
  const onAddPizza = ()=>{
    const obj={
      id,
      name,
      imageUrl,
      price,
      types:itemsDough[activeDough],
      sizes: itemsSize[activeSize],
    }
    addPizzaToCardState(obj);
  }
  return (
    <>
     <ButtonAddPizza/>
    </>
  );
};

const mapStateToProps=(state)=>{
  return{
    items: state.card.items
  }
}


export default compose( connect(mapStateToProps,{addPizzaToCardState})(React.memo(ButtonAddPizzaContainer)))

import React from "react";
import { useEffect } from "react";
import { getDataPizzas } from "../../../redux/reducers/pizzas-reducer";
import { compose } from "redux";
import { connect } from "react-redux";
import { MainContent } from "./MainContent";

const MainContentContainer = (props) => {
  
  
  useEffect(() => {
    props.getDataPizzas(props.category,props.sortBy)
  }, [props.category,props.sortBy]);

  return (
    <div>
      <MainContent itemsCard={props.itemsCard} pizzas={props.dataPizzas} />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    dataPizzas: state.pizzas.items,
    category: state.filter.category,
    sortBy: state.sort.sortBy,
    itemsCard: state.card.items
  };
};

export default compose(
  connect(mapStateToProps, {getDataPizzas})(React.memo(MainContentContainer))
);

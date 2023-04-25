import React from "react";
import { useEffect } from "react";
import { getDataPizzas, setPizzas } from "../../../redux/reducers/pizzas-reducer";
import { compose } from "redux";
import { connect } from "react-redux";
import { MainContent } from "./MainContent";

const MainContentContainer = (props) => {
  
  
  useEffect(() => {
    props.getDataPizzas(props.category)
  }, [props.category]);

  return (
    <div>
      <MainContent pizzas={props.dataPizzas} />
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    dataPizzas: state.pizzas.items,
    category: state.filter.category,
  };
};

export default compose(
  connect(mapStateToProps, {getDataPizzas})(React.memo(MainContentContainer))
);

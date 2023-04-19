import React from "react";
import { pizzasApi } from "../../../api/api";
import { useEffect } from "react";
import { setPizzas } from "../../../redux/reducers/pizzas-reducer";
import { compose } from "redux";
import { connect } from "react-redux";
import { MainContent } from "./MainContent";

const MainContentContainer = (props) => {
  const categoryArr = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  
  useEffect(() => {
    pizzasApi.getPizzas().then(({ data }) => props.setPizzas(data.pizzas));
  }, []);

  return (
    <div>
      <MainContent categoryArr={categoryArr} pizzas={props.dataPizzas} />
    </div>
  );
};

let mapDispathToProps = (dispatch) => {
  return {
    setPizzas: (items) => {
      dispatch(setPizzas(items));
    },
  };
};

let mapStateToProps = (state) => {
  return {
    dataPizzas: state.pizzas.items,
  };
};

export default compose(
  connect(mapStateToProps, mapDispathToProps)(React.memo(MainContentContainer))
);

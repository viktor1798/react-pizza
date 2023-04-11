import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/mainPage/header/Header";
import { MainContent } from "./components/mainPage/mainContent/MainContent";
import { useEffect } from "react";
import { pizzasApi } from "./api/api";
import { connect } from "react-redux";
import { setPizzas } from "./redux/reducers/pizzas-reducer";
import axios from "axios";

function App(props) {
  useEffect(() => {
    axios.get('http://localhost:3000/data-base-pizza.json').then(({ data }) => props.setPizzas(data.pizzas));
  }, []);


  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <MainContent pizzas={props.dataPizzas} />
      </div>
    </BrowserRouter>
  );

}
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

export default connect(mapStateToProps, mapDispathToProps)(App);
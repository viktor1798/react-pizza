import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/mainPage/header/Header";
import { MainContent } from "./components/mainPage/mainContent/MainContent";
import { useEffect } from "react";
import { connect } from "react-redux";
import { setPizzas } from "./redux/reducers/pizzas-reducer";
import { pizzasApi } from "./api/api";

function App(props) {
  console.log(props)

  useEffect(() => {
    pizzasApi.getPizzas().then(({ data }) => props.setPizzas(data.pizzas));
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
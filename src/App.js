import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/mainPage/header/Header";
import { MainContent } from "./components/mainPage/mainContent/MainContent";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [dataPizzas, setDataPizzas] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/data-base-pizza.json`)
      .then(({ data }) => setDataPizzas(data.pizzas));
  }, []);

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <MainContent pizzas={dataPizzas} />
      </div>
    </BrowserRouter>
  );
}

export default App;

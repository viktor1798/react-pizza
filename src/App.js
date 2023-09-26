import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/HeaderComponents/Header";
import Main from "./pages/Main";
import Card from "./pages/Card";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header  />
        <Routes>
          <Route path="/" element={<Main  />} />
          <Route path="/cart" element={<Card />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

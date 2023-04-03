import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/mainPage/header/Header";
import { MainContent } from "./components/mainPage/mainContent/MainContent";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <MainContent />
      </div>
    </BrowserRouter>
  );
}

export default App;

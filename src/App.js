import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/mainPage/header/Header";
import MainContentContainer from "./components/mainPage/mainContent/MainContentContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <MainContentContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;

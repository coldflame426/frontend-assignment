import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";

import Footer from "components/Footer";
import Navbar from "./components/Navbar";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

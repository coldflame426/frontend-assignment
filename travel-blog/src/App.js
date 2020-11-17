import headshot from "./images/headshot.jpg";
import heroBackground from "./images/hero-background.jpg";
import { BrowserRouter } from "react-router-dom";

import Routes from "./Routes";

import Navbar from "./components/Navbar";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;

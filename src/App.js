import React from "react";
//Import CSS
import "./App.css";
//Import components
import ProgressBar from ".//components/Progress";
import Cards from "./components/Cards";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ImageSection from "./components/ImageSection";

function App() {
  return (
    <div className="App">
      <header className="App-section" id="header">
        <img src={"./img/running.png"} className="App-logo" alt="logo" />
        <h1>Løpemål 2022</h1>
        <ProgressBar max={1000} value={374} />
        <AnchorLink href="#cards">
          <div class="arrow"></div>
        </AnchorLink>
      </header>
      <section className="App-section" id="cards">
        <Cards />
        <AnchorLink href="#imageViewer">
          <div class="arrow"></div>
        </AnchorLink>
      </section>
      <section className="App-section" id="imageViewer">
        <h1>Skryteveggen</h1>
        <ImageSection />
        <AnchorLink href="#header">
          <div class="arrow" style={{ transform: "rotate(-47deg)" }}></div>
        </AnchorLink>
      </section>
    </div>
  );
}

export default App;

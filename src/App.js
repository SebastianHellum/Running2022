import React, { useState, useEffect } from "react";
import "./App.css";
import ProgressBar from ".//components/Progress";
import Cards from "./components/Cards";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ImageSection from "./components/ImageSection";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"./img/running.png"} className="App-logo" alt="logo" />
        <h1>Løpemål 2022</h1>
        <ProgressBar max={1000} value={9} />
        <AnchorLink href="#cards">
          <div class="arrow"></div>
        </AnchorLink>
      </header>
      <section className="App-header" id="cards">
        <Cards />
        <AnchorLink href="#imageViewer">
          <div class="arrow"></div>
        </AnchorLink>
      </section>
      <section id="imageViewer">
        <h1>Skryteveggen</h1>
        <ImageSection />
      </section>
    </div>
  );
}

export default App;

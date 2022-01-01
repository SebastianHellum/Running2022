import React, { useState, useEffect } from "react";
import "./App.css";
import ProgressBar from ".//components/Progress";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"./img/beer.png"} className="App-logo" alt="logo" />
        <h1>Løpemål 2022 👟</h1>
        <ProgressBar max={1000} value={9} />
      </header>
      <main>
        <Cards />
      </main>
    </div>
  );
}

export default App;

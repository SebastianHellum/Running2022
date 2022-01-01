import React, { useState, useEffect } from "react";
import "./App.css";
import ProgressBar from "./Progress";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"./img/beer.png"} className="App-logo" alt="logo" />
        <h1>Løpemål 2022 👟</h1>
        <ProgressBar max={1000} value={0} />
      </header>
    </div>
  );
}

export default App;

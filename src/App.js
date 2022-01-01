import React, { useState, useEffect } from "react";
import "./App.css";
import ProgressBar from "./Progress";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Sebs løpemål 2022</p>
        <ProgressBar max={1000} value={8} />
      </header>
    </div>
  );
}

export default App;

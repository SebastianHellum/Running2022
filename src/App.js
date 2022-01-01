import "./App.css";

import ProgressBar from "./Progress";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Training</p>
        <ProgressBar max={1000} value={50} />
      </header>
    </div>
  );
}

export default App;

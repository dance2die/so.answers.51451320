import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

document.body.style.backgroundRepeat = `no-repeat`;

function changeBackground() {
  document.body.style.backgroundImage = `url("https://www.placecage.com/gif/284/196")`;
}

function App() {
  document.body.style.backgroundImage = `url("https://www.placecage.com/c/460/300")`;

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={changeBackground}>Change Background</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

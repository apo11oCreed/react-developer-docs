import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Section from "./components/section";

function App() {
  const json = require("./data/data.json");
  return (
    <div className="App">
      <header className="App-header">
        <h1>Developer Documentation</h1>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <Section className="test" h1={json.data[0].h1} code={json.data[0].code} />
      <Section className="test" h1={json.data[1].h1} code={json.data[1].code} />
      <Section className="test" h1={json.data[2].h1} code={json.data[2].code} />
    </div>
  );
}

export default App;

// To load JSON, needed : https://webpack.js.org/loaders/json-loader/, also install typescript 1st

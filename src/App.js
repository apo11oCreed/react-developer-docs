import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/navigation";
import Section from "./components/section";
import Syntax from "./components/sections/syntax";
import Accessibility from "./components/sections/accessibility";
import Performance from "./components/sections/performance";

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
      <Navigation />
      <Section
        id="syntax"
        tabindex="-1"
        h2={json.data[0].h2}
        code={json.data[0].code}
      >
        <Syntax />
      </Section>
      <Section
        id="accessibility"
        tabindex="-1"
        h2={json.data[1].h2}
        code={json.data[1].code}
      >
        <Accessibility />
      </Section>
      <Section
        id="performance"
        tabindex="-1"
        h2={json.data[2].h2}
        code={json.data[2].code}
      >
        <Performance />
      </Section>
    </div>
  );
}

export default App;

// To load JSON, needed : https://webpack.js.org/loaders/json-loader/, also install typescript 1st
// To fix issue with copying NPM projects that break reactjs commands : https://github.com/facebook/create-react-app/issues/200

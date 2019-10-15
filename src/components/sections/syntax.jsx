import React, { Component } from "react";

class Syntax extends Component {
  render() {
    return (
      <React.Fragment>
        <ul>
          <li>Always use double quotes, never single quotes, on attributes.</li>
          <li>Nested elements should be indented once.</li>
          <li>
            Naming of CSS classes should use underscores in place of spaces.
          </li>
          <li>Javascript variables should be camel-cased.</li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Syntax;

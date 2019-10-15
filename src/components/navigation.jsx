import React, { Component } from "react";

class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav>
        <h2>Navigation</h2>
        <ul>
          <li>
            <a href="#syntax">Syntax</a>
          </li>
          <li>
            <a href="#accessibility">Accessibility</a>
          </li>
          <li>
            <a href="#performance">Performance</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;

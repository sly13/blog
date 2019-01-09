import React, { Component } from "react";

class Tags extends Component {
  state = {};
  render() {
    return (
      <ul className="subCategory unstyled">
        <li>
          <a href="/">Travel</a>
        </li>
        <li>
          <a href="/">Health</a>
        </li>
        <li>
          <a href="/">Architecture</a>
        </li>
        <li>
          <a href="/">Food</a>
        </li>
      </ul>
    );
  }
}

export default Tags;

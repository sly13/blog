import React, { Component } from "react";

class Pagination extends Component {
  state = {};
  render() {
    return (
      <div className="paging">
        <ul className="pagination">
          <li className="active">
            <a href="/">1</a>
          </li>
          <li>
            <a href="/">2</a>
          </li>
          <li>
            <a href="/">3</a>
          </li>
          <li>
            <a href="/">4</a>
          </li>
          <li>
            <a href="/">»</a>
          </li>
          <li>
            <span className="page-numbers">Page 1 of 2</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Pagination;

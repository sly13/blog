import React, { Component } from "react";
import { Link } from "react-router-dom";

class Admin extends Component {
  state = {};
  render() {
    return (
      <ul>
        <li>
          <Link to="/category-list">Category</Link>
        </li>
        <li>
          <Link to="/post-list">Post</Link>
        </li>
      </ul>
    );
  }
}

export default Admin;

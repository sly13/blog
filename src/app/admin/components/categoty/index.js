import React, { Component } from "react";
import { Link } from "react-router-dom";

class CategoryList extends Component {
  state = {};
  render() {
    return (
      <>
        <h1>Category List</h1>
        <Link to="/create-category">Add category</Link>
      </>
    );
  }
}

export default CategoryList;

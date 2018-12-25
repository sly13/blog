import React, { Component } from "react";
import { withRouter } from "react-router";

import { createCategory } from "../../action";

class CategoryCreate extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    createCategory({ name: e.target.name.value })
      .then(response => {
        this.props.history.push("/category-list");
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <>
        <div className="col-lg-6">
          <h1>Create category</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                name="name"
              />
            </div>

            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(CategoryCreate);

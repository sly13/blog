import React, { Component } from "react";
import Item from "./items";

import { getCategories } from "../../action";

class CategoryList extends Component {
  state = {
    data: [],
    isLoaded: false
  };

  componentDidMount() {
    getCategories()
      .then(response => {
        this.setState({ data: response.data, isLoaded: true });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handler = data => {
    this.setState({
      data
    });
  };

  render() {
    const { isLoaded, data } = this.state;

    return (
      <>
        <h2>Category List</h2>
        {isLoaded && (
          <>
            <table className="table table-striped table-bordered table-hover">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <Item data={this.state.data} handler={this.handler} />
              </tbody>
            </table>
          </>
        )}
      </>
    );
  }
}

export default CategoryList;

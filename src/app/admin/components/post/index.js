import React, { Component } from "react";
import Item from "./items";
import { getPosts } from "../../action";

class PostList extends Component {
  state = {
    data: [],
    isLoaded: false
  };

  componentDidMount() {
    getPosts()
      .then(response => {
        this.setState({ data: response.data, isLoaded: true });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { isLoaded, data } = this.state;
    return (
      <>
        <h2>Post List</h2>
        {isLoaded && (
          <>
            <table className="table table-striped table-bordered table-hover">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">CategoryId</th>
                  <th scope="col">Title</th>
                  <th scope="col">subText</th>
                  <th scope="col">Text</th>
                  <th scope="col" style={colStyleText}>
                    Action
                  </th>
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

const colStyleText = {
  width: "15%"
};

export default PostList;

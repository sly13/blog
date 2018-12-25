import React, { Component } from "react";
import { Link } from "react-router-dom";
import { deletePost } from "../../action";

class Item extends Component {
  handleDelete = id => {
    deletePost(id)
      .then(response => {
        this.props.handler(this.props.data.filter(item => item.id !== id));
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    const elements = this.props.data.map(item => (
      <tr key={item.id}>
        <th scope="row">{item.id}</th>
        <td>{item.category}</td>
        <td>{item.title}</td>
        <td>{item.subText.slice(0, 100)}...</td>
        <td>{item.text.slice(0, 100)}...</td>
        <td>
          <div
            className="btn-toolbar"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div
              className="btn-group mr-2"
              role="group"
              aria-label="Second group"
            >
              <Link to={`/post/${item.id}`}>
                <button type="button" className="btn btn-dark btn-sm">
                  <i className="fa fa-edit" />
                </button>
              </Link>
            </div>
            <div
              className="btn-group mr-2"
              role="group"
              aria-label="Second group"
            >
              <Link to={`/post/${item.id}`}>
                <button type="button" className="btn btn-dark btn-sm">
                  <i className="fa fa-eye" />
                </button>
              </Link>
            </div>
            <div className="btn-group" role="group" aria-label="Third group">
              <button
                type="button"
                className="btn btn-dark btn-sm"
                onClick={() => this.handleDelete(item.id)}
              >
                <i className="fa fa-trash" />
              </button>
            </div>
          </div>
        </td>
      </tr>
    ));

    return elements;
  }
}

export default Item;

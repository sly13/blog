import React, { Component } from "react";
import { deleteCategory } from "../../../../action";

class Item extends Component {
  handleDelete = id => {
    deleteCategory(id)
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
        <td>{item.name}</td>
        <td>{item.slug}</td>
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
              <button type="button" className="btn btn-dark btn-sm">
                <i className="fa fa-edit" />
              </button>
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

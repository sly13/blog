import React, { Component } from "react";
import { Link } from "react-router-dom";

class Item extends Component {
  state = {};

  render() {
    const elements = this.props.data.map(item => (
      <div className="item" key={item.id}>
        <div className="post-content">
          <h2 className="post-title title-small">
            <Link to={`/post/${item.slug}`}>{item.title}</Link>
          </h2>
        </div>
      </div>
    ));

    return elements;
  }
}

export default Item;

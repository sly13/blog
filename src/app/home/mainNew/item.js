import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getFormatedDate } from "../../../helper";
import { withRouter } from "react-router";

class Item extends Component {
  setBackgroundImage = imagePath => {
    return { backgroundImage: `url(${imagePath})` };
  };

  render() {
    const elements = this.props.data.map(item => (
      // <Link to={`/post/${item.postSlug}`} key={item.id}>
      <div
        key={item.id}
        className="item"
        style={this.setBackgroundImage(item.imagePath)}
        onClick={() => this.props.redirect(item.postSlug)}
      >
        <div className="featured-post">
          <div className="post-content">
            <Link className="post-cat" to={`/category/${item.categorySlug}`}>
              {item.category}
            </Link>

            <h2 className="post-title title-extra-large">
              <Link to={`/post/${item.postSlug}`}>{item.title}</Link>
            </h2>
            <span className="post-date">
              {getFormatedDate(item.timeCreated)}
            </span>
          </div>
        </div>
      </div>
      // </Link>
    ));

    return <>{elements} </>;
  }
}

export default withRouter(Item);

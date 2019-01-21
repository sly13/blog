import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getFormatedDate } from "../../../helper";

class Items extends Component {
  render() {
    let start_count = 0;
    const elements = this.props.data.map((item, index) => {
      if (
        index >= this.props.start_offset &&
        start_count < this.props.perPage
      ) {
        start_count++;
        return (
          <div className="col-md-6 col-sm-6" key={item.id}>
            <div className="post-block-style post-grid clearfix">
              <div className="post-thumb">
                <Link to={`/post/${item.postSlug}`}>
                  <img className="img-responsive" src={item.imagePath} alt="" />
                </Link>
              </div>

              <Link className="post-cat" to={`/category/${item.categorySlug}`}>
                {item.category}
              </Link>

              <div className="post-content">
                <h2 className="post-title title-large">
                  <Link to={`/post/${item.postSlug}`}>{item.title}</Link>
                </h2>
                <div className="post-meta">
                  {/* <span className="post-author">
                <a href="/">John Doe</a>
              </span> */}
                  <span className="post-date">
                    {getFormatedDate(item.timeCreated)}
                  </span>
                  <span className="post-comment pull-right">
                    <i className="fa fa-comments-o" />
                    <a href="/" className="comments-link">
                      <span>01</span>
                    </a>
                  </span>
                </div>
                <p>{`${item.subText.slice(0, 128)}...`}</p>
              </div>
            </div>
          </div>
        );
      }
    });

    return { elements };
  }
}

export default Items;

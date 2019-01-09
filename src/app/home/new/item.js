import React, { Component } from "react";
import { Link } from "react-router-dom";
import { chunk } from "lodash";

class Item extends Component {
  state = {};
  render() {
    console.log("more array", this.props.data);
    const split = chunk(this.props.data, 4);

    const part1 = split[0].map(item => (
      <div key={item.id}>
        <div className="post-block-style post-float-half clearfix">
          <div className="post-thumb">
            <Link to={`/post/${item.postSlug}`}>
              <img className="img-fluid" src={item.imagePath} alt="" />
            </Link>
          </div>
          <Link className="post-cat" to={`/category/${item.categorySlug}`}>
            {item.category}
          </Link>

          <div className="post-content">
            <h2 className="post-title">
              <Link to={`/post/${item.postSlug}`}>{item.title}</Link>
            </h2>
            <div className="post-meta">
              {/* <span className="post-author">
                <a href="/">John Doe</a>
              </span> */}
              <span className="post-date">Mar 29, 2017</span>
            </div>
            <p>{item.subText}</p>
          </div>
        </div>
        <div className="gap-30" />
      </div>
    ));

    const part2 = split[1].map((item, index) => (
      <div key={item.id}>
        <div className="post-block-style post-float-half clearfix">
          <div className="post-thumb">
            <Link to={`/post/${item.postSlug}`}>
              <img className="img-fluid" src={item.imagePath} alt="" />
            </Link>
          </div>
          <Link className="post-cat" to={`/category/${item.categorySlug}`}>
            {item.category}
          </Link>

          <div className="post-content">
            <h2 className="post-title">
              <Link to={`/post/${item.slug}`}>{item.title}</Link>
            </h2>
            <div className="post-meta">
              {/* <span className="post-author">
                <a href="/">John Doe</a>
              </span> */}
              <span className="post-date">Mar 29, 2017</span>
            </div>
            <p>{item.subText}</p>
          </div>
        </div>
        <div className="gap-30" />
      </div>
    ));

    return (
      <>
        <div className="item">{part1}</div>
        <div className="item">{part2}</div>
      </>
    );
  }
}

export default Item;

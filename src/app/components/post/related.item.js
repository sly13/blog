import React, { Component } from "react";

class RelatedItem extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="item">
          <div className="post-block-style clearfix">
            <div className="post-thumb">
              <a href="/">
                <img
                  className="img-responsive"
                  src="../../../images/news/lifestyle/travel5.jpg"
                  alt=""
                />
              </a>
            </div>
            <a className="post-cat" href="/">
              Health
            </a>
            <div className="post-content">
              <h2 className="post-title title-medium">
                <a href="/">
                  Hynopedia helps female travelers find health care in Maldivs
                </a>
              </h2>
              <div className="post-meta">
                <span className="post-author">
                  <a href="/">John Doe</a>
                </span>
                <span className="post-date">Feb 19, 2017</span>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="post-block-style clearfix">
            <div className="post-thumb">
              <a href="/">
                <img
                  className="img-responsive"
                  src="../../../images/news/lifestyle/health5.jpg"
                  alt=""
                />
              </a>
            </div>
            <a className="post-cat" href="/">
              Health
            </a>
            <div className="post-content">
              <h2 className="post-title title-medium">
                <a href="/">Netcix cuts out the chill with an integrated...</a>
              </h2>
              <div className="post-meta">
                <span className="post-author">
                  <a href="/">John Doe</a>
                </span>
                <span className="post-date">Feb 19, 2017</span>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="post-block-style clearfix">
            <div className="post-thumb">
              <a href="/">
                <img
                  className="img-responsive"
                  src="../../../images/news/lifestyle/travel3.jpg"
                  alt=""
                />
              </a>
            </div>
            <a className="post-cat" href="/">
              Travel
            </a>
            <div className="post-content">
              <h2 className="post-title title-medium">
                <a href="/">
                  This Aeroplane that looks like a butt is the largest aircraft
                  in the world
                </a>
              </h2>
              <div className="post-meta">
                <span className="post-author">
                  <a href="/">John Doe</a>
                </span>
                <span className="post-date">Feb 19, 2017</span>
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="post-block-style clearfix">
            <div className="post-thumb">
              <a href="/">
                <img
                  className="img-responsive"
                  src="../../../images/news/lifestyle/travel4.jpg"
                  alt=""
                />
              </a>
            </div>
            <a className="post-cat" href="/">
              Travel
            </a>
            <div className="post-content">
              <h2 className="post-title title-medium">
                <a href="/">
                  19 incredible photos from Disney's 'Star Wars' cruise algore
                </a>
              </h2>
              <div className="post-meta">
                <span className="post-author">
                  <a href="/">John Doe</a>
                </span>
                <span className="post-date">Feb 19, 2017</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default RelatedItem;

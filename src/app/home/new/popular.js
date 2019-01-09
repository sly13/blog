import React, { Component } from "react";

class Popular extends Component {
  state = {};
  render() {
    return (
      <div className="widget color-default">
        <h3 className="block-title">
          <span>Популярные</span>
        </h3>

        <div className="post-overaly-style clearfix">
          <div className="post-thumb">
            <a href="/">
              <img
                className="img-fluid"
                src="images/news/lifestyle/health4.jpg"
                alt=""
              />
            </a>
          </div>

          <div className="post-content">
            <a className="post-cat" href="/">
              Health
            </a>
            <h2 className="post-title">
              <a href="/">
                Smart packs parking sensor tech and beeps when col…
              </a>
            </h2>
            <div className="post-meta">
              <span className="post-date">Feb 06, 2017</span>
            </div>
          </div>
        </div>

        <div className="list-post-block">
          <ul className="list-post">
            <li className="clearfix">
              <div className="post-block-style post-float clearfix">
                <div className="post-thumb">
                  <a href="/">
                    <img
                      className="img-fluid"
                      src="images/news/tech/gadget3.jpg"
                      alt=""
                    />
                  </a>
                  <a className="post-cat" href="/">
                    Gadgets
                  </a>
                </div>

                <div className="post-content">
                  <h2 className="post-title title-small">
                    <a href="/">
                      Panasonic's new Sumix CH7 an ultra portable filmmaker's
                      drea…
                    </a>
                  </h2>
                  <div className="post-meta">
                    <span className="post-date">Mar 13, 2017</span>
                  </div>
                </div>
              </div>
            </li>

            <li className="clearfix">
              <div className="post-block-style post-float clearfix">
                <div className="post-thumb">
                  <a href="/">
                    <img
                      className="img-fluid"
                      src="images/news/lifestyle/travel5.jpg"
                      alt=""
                    />
                  </a>
                  <a className="post-cat" href="/">
                    Travel
                  </a>
                </div>

                <div className="post-content">
                  <h2 className="post-title title-small">
                    <a href="/">
                      Hynopedia helps female travelers find health care...
                    </a>
                  </h2>
                  <div className="post-meta">
                    <span className="post-date">Jan 11, 2017</span>
                  </div>
                </div>
              </div>
            </li>

            <li className="clearfix">
              <div className="post-block-style post-float clearfix">
                <div className="post-thumb">
                  <a href="/">
                    <img
                      className="img-fluid"
                      src="images/news/tech/robot5.jpg"
                      alt=""
                    />
                  </a>
                  <a className="post-cat" href="/">
                    Robotics
                  </a>
                </div>

                <div className="post-content">
                  <h2 className="post-title title-small">
                    <a href="/">
                      Robots in hospitals can be quite handy to navigate
                      around...
                    </a>
                  </h2>
                  <div className="post-meta">
                    <span className="post-date">Feb 19, 2017</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Popular;

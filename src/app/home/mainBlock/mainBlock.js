import React, { Component } from "react";

class MainBlock extends Component {
  state = {};

  render() {
    return (
      <>
        <section className="block-wrapper">
          <div className="container">
            <div className="row" />
          </div>
        </section>

        <section className="block-wrapper solid-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-4 pad-r">
                <div className="post-overaly-style text-center first clearfix">
                  <div className="post-thumb">
                    <a href="/">
                      <img
                        className="img-fluid"
                        src="images/news/tech/gadget2.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="post-content">
                    <a className="post-cat" href="/">
                      Gadgets
                    </a>
                    <h2 className="post-title">
                      <a href="/">Samsung Gear S3 review: A whimper, when…</a>
                    </h2>
                    <div className="post-meta">
                      <span className="post-date">Feb 06, 2017</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 pad-0">
                <div className="post-overaly-style text-center clearfix">
                  <div className="post-thumb">
                    <a href="/">
                      <img
                        className="img-fluid"
                        src="images/news/lifestyle/health5.jpg"
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
                        Netcix cuts out the chill with an integrated personal...
                      </a>
                    </h2>
                    <div className="post-meta">
                      <span className="post-date">Feb 06, 2017</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 pad-l">
                <div className="post-overaly-style text-center clearfix">
                  <div className="post-thumb">
                    <a href="/">
                      <img
                        className="img-fluid"
                        src="images/news/tech/game1.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="post-content">
                    <a className="post-cat" href="/">
                      Games
                    </a>
                    <h2 className="post-title">
                      <a href="/">
                        Historical heroes and robot dinosaurs: New games...
                      </a>
                    </h2>
                    <div className="post-meta">
                      <span className="post-date">Feb 06, 2017</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default MainBlock;

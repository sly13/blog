import React, { Component } from "react";

class Comments extends Component {
  state = {};
  render() {
    return (
      <div id="comments" className="comments-area block">
        <h3 className="block-title">
          <span>03 Comments</span>
        </h3>

        <ul className="comments-list">
          <li>
            <div className="comment">
              <img
                className="comment-avatar pull-left"
                alt=""
                src="../../../images/news/user1.png"
              />
              <div className="comment-body">
                <div className="meta-data">
                  <span className="comment-author">Michelle Aimber</span>
                  <span className="comment-date pull-right">
                    January 17, 2017 at 1:38 pm
                  </span>
                </div>
                <div className="comment-content">
                  <p>
                    High Life tempor retro Truffaut. Tofu mixtape twee,
                    assumenda quinoa flexitarian aesthetic artisan vinyl pug.
                    Chambray et Carles Thundercats cardigan actually, magna
                    bicycle rights.
                  </p>
                </div>
                <div className="text-left">
                  <a className="comment-reply" href="/">
                    Reply
                  </a>
                </div>
              </div>
            </div>

            <ul className="comments-reply">
              <li>
                <div className="comment">
                  <img
                    className="comment-avatar pull-left"
                    alt=""
                    src="../../../images/news/user2.png"
                  />
                  <div className="comment-body">
                    <div className="meta-data">
                      <span className="comment-author">Genelia Dusteen</span>
                      <span className="comment-date pull-right">
                        January 17, 2017 at 1:38 pm
                      </span>
                    </div>
                    <div className="comment-content">
                      <p>
                        Farm-to-table selfies labore, leggings cupidatat sunt
                        taxidermy umami fanny pack typewriter hoodie art party
                        voluptate cardigan banjo.
                      </p>
                    </div>
                    <div className="text-left">
                      <a className="comment-reply" href="/">
                        Reply
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="comment last">
              <img
                className="comment-avatar pull-left"
                alt=""
                src="../../../images/news/user1.png"
              />
              <div className="comment-body">
                <div className="meta-data">
                  <span className="comment-author">Michelle Aimber</span>
                  <span className="comment-date pull-right">
                    January 17, 2017 at 1:38 pm
                  </span>
                </div>
                <div className="comment-content">
                  <p>
                    VHS Wes Anderson Banksy food truck vero. Farm-to-table
                    selfies labore, leggings cupidatat sunt taxidermy umami
                    fanny pack typewriter hoodie art party voluptate cardigan
                    banjo.
                  </p>
                </div>
                <div className="text-left">
                  <a className="comment-reply" href="/">
                    Reply
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Comments;

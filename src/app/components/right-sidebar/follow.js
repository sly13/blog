import React, { Component } from "react";

class FollowUs extends Component {
  render() {
    return (
      <div className="widget">
        <h3 className="block-title">
          <span>Follow Us</span>
        </h3>

        <ul className="social-icon">
          <li>
            <a href="/" target="_blank">
              <i className="fa fa-rss" />
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              <i className="fa fa-google-plus" />
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              <i className="fa fa-vimeo-square" />
            </a>
          </li>
          <li>
            <a href="/" target="_blank">
              <i className="fa fa-youtube" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default FollowUs;

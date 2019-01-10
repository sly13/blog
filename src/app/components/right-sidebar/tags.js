import React, { Component } from "react";

class Tags extends Component {
  render() {
    return (
      <div className="widget widget-tags">
        <h3 className="block-title">
          <span>Теги</span>
        </h3>
        <ul className="unstyled clearfix">
          <li>
            <a href="/">Apps</a>
          </li>
          <li>
            <a href="/">Architechture</a>
          </li>
          <li>
            <a href="/">Food</a>
          </li>
          <li>
            <a href="/">Gadgets</a>
          </li>
          <li>
            <a href="/">Games</a>
          </li>
          <li>
            <a href="/">Health</a>
          </li>
          <li>
            <a href="/">Lifestyles</a>
          </li>
          <li>
            <a href="/">Robotics</a>
          </li>
          <li>
            <a href="/">Software</a>
          </li>
          <li>
            <a href="/">Tech</a>
          </li>
          <li>
            <a href="/">Travel</a>
          </li>
          <li>
            <a href="/">Video</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Tags;

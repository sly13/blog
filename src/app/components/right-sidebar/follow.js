import React, { Component } from "react";

class FollowUs extends Component {
  render() {
    return (
      <div className="widget">
        <h3 className="block-title">
          <span>Следите за нами</span>
        </h3>

        <ul className="social-icon">
          <li>
            <a
              href="https://www.facebook.com/TeaHub-308508270008979"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/teahub.ru"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-instagram" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCK-zse49B5-h14Xfhou7H_w"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-youtube" />
            </a>
          </li>
          <li>
            <a
              href="https://vk.com/teahub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-vk" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default FollowUs;

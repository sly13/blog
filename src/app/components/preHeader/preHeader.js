import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getFormatedDate } from "../../../helper";

class PreHeader extends Component {
  render() {
    const string = getFormatedDate(new Date());

    return (
      <>
        <div id="top-bar" className="top-bar">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="ts-date">
                  <i className="fa fa-calendar-check-o" />
                  {string}
                </div>
                <ul className="unstyled top-nav">
                  <li>
                    <Link to="/author">О нас</Link>
                  </li>

                  <li>
                    <Link to="/contact">Контакты</Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 top-social text-lg-right text-md-center">
                <ul className="unstyled">
                  <li>
                    <a title="Instagram" href="/">
                      <span className="social-icon">
                        <i className="fa fa-instagram" />
                      </span>
                    </a>

                    <a title="Skype" href="/">
                      <span className="social-icon">
                        <i className="fa fa-vk" />
                      </span>
                    </a>
                    <a title="Facebook" href="/">
                      <span className="social-icon">
                        <i className="fa fa-facebook" />
                      </span>
                    </a>
                    {/* <a title="Twitter" href="/">
                      <span className="social-icon">
                        <i className="fa fa-twitter" />
                      </span>
                    </a> */}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PreHeader;

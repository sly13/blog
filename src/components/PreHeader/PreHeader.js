import React, { Component } from "react";

class PreHeader extends Component {
  render() {
    return (
      <>
        <div id="top-bar" className="top-bar">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="ts-date">
                  <i className="fa fa-calendar-check-o" />May 29, 2017
                </div>
                <ul className="unstyled top-nav">
                  <li>
                    <a href="/">About</a>
                  </li>
                  <li>
                    <a href="/">Write for Us</a>
                  </li>
                  <li>
                    <a href="/">Advertise</a>
                  </li>
                  <li>
                    <a href="/">Contact</a>
                  </li>
                </ul>
              </div>

              <div className="col-md-4 top-social text-lg-right text-md-center">
                <ul className="unstyled">
                  <li>
                    <a title="Facebook" href="/">
                      <span className="social-icon">
                        <i className="fa fa-facebook" />
                      </span>
                    </a>
                    <a title="Twitter" href="/">
                      <span className="social-icon">
                        <i className="fa fa-twitter" />
                      </span>
                    </a>
                    <a title="Google+" href="/">
                      <span className="social-icon">
                        <i className="fa fa-google-plus" />
                      </span>
                    </a>
                    <a title="Linkdin" href="/">
                      <span className="social-icon">
                        <i className="fa fa-linkedin" />
                      </span>
                    </a>
                    <a title="Rss" href="/">
                      <span className="social-icon">
                        <i className="fa fa-rss" />
                      </span>
                    </a>
                    <a title="Skype" href="/">
                      <span className="social-icon">
                        <i className="fa fa-skype" />
                      </span>
                    </a>
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

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Info extends Component {
  state = {};
  render() {
    return (
      <>
        <footer id="footer" className="footer">
          {/* <PreFooter /> */}
          <div className="footer-info text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="footer-info-content">
                    <div className="footer-logo">
                      <Link to="/">
                        <img
                          className="img-fluid"
                          src="../../../images/logo-new2.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    <p>
                      News247 Worldwide is a popular online newsportal and going
                      source for technical and digital content for its
                      influential audience around the globe. You can reach us
                      via email or phone.
                    </p>
                    <p className="footer-info-phone">
                      <i className="fa fa-phone" /> +(785) 238-4131
                    </p>
                    <p className="footer-info-email">
                      <i className="fa fa-envelope-o" /> editor@news247.com
                    </p>
                    <ul className="unstyled footer-social">
                      <li>
                        <a title="Rss" href="/">
                          <span className="social-icon">
                            <i className="fa fa-rss" />
                          </span>
                        </a>
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
                        <a title="Skype" href="/">
                          <span className="social-icon">
                            <i className="fa fa-skype" />
                          </span>
                        </a>
                        <a title="Skype" href="/">
                          <span className="social-icon">
                            <i className="fa fa-dribbble" />
                          </span>
                        </a>
                        <a title="Skype" href="/">
                          <span className="social-icon">
                            <i className="fa fa-pinterest" />
                          </span>
                        </a>
                        <a title="Skype" href="/">
                          <span className="social-icon">
                            <i className="fa fa-instagram" />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Info;

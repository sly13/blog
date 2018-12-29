import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};
  render() {
    return (
      <>
        <header id="header" className="header">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                <div className="logo">
                  <Link to="/">
                    <img src="../../../images/logo-new2.png" alt="" />
                  </Link>
                </div>
              </div>

              <div className="col-xs-12 col-sm-7 col-md-7  col-lg-7 header-right">
                <div className="pull-right">
                  <a href="/">
                    <img
                      src="../../../images/banner-tea5.png"
                      className="img-responsive"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;

import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <>
        <header id="header" class="header">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3">
                <div class="logo">
                  <a href="index.html">
                    <img src="images/logos/logo.png" alt="" />
                  </a>
                </div>
              </div>

              <div class="col-xs-12 col-sm-9 col-md-9  col-lg-9 header-right">
                <div class="pull-right">
                  <a href="#">
                    <img
                      src="images/banner.png"
                      class="img-responsive"
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

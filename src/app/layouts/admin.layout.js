import React, { Component } from "react";

import Header from "../admin/components/header/header";
import Footer from "../admin/components/footer/footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import "bootstrap/dist/js/bootstrap.js";
import "../../css/admin.css";
import "../../css/font-awesome.min.css";

class Layout extends Component {
  render() {
    return (
      <>
        <wrapper className="d-flex flex-column">
          <Header />
          <main className="container-fluid py-3 flex-fill">
            {this.props.children}
          </main>
          <Footer />
        </wrapper>
      </>
    );
  }
}

export default Layout;

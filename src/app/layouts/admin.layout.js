import React, { Component } from "react";

import Header from "../admin/components/header/header";
import Footer from "../admin/components/footer/footer";

import "../../css/admin.css";

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

import React, { Component } from "react";

import PreHeader from "../components/preHeader/preHeader";
import Header from "../components/header/header";
import Menu from "../components/menu/menu";
import Trending from "../components/trending/trending";
import Footer from "../components/footer/footer";

import "../../css/style.css";

import "../../css/responsive.css";
import "../../css/font-awesome.min.css";
import "../../css/animate.css";
import "../../css/colorbox.css";

class DefaultLayout extends Component {
  render() {
    return (
      <>
        <Trending />
        <PreHeader />
        <Header />
        <Menu />
        {this.props.children}
        <Footer />
      </>
    );
  }
}

export default DefaultLayout;

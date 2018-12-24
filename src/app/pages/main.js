import React, { Component } from "react";

import MainNew from "../home/mainNew/mainNew";
import MainBlock from "../home/mainBlock/mainBlock";
import New from "../home/new/index";

class Main extends Component {
  state = {};
  render() {
    return (
      <>
        <MainNew />
        <MainBlock />
        <New />
      </>
    );
  }
}

export default Main;

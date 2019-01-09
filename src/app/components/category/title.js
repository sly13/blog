import React, { Component } from "react";

class Title extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <h3 className="block-title">
        <span>{this.props.slug}</span>
      </h3>
    );
  }
}

export default Title;

import React, { Component } from "react";
import { Link } from "react-router-dom";

class BreadCrumbs extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div class="page-title">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <ol class="breadcrumb">
                <li>
                  <Link to="/">Главная</Link>
                </li>
                <li>
                  <Link to={this.props.link}>{this.props.page}</Link>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BreadCrumbs;

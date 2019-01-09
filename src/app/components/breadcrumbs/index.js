import React, { Component } from "react";
import { Link } from "react-router-dom";

class BreadCrumbs extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div className="page-title">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <ol className="breadcrumb">
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

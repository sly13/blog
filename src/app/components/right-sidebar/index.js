import React, { Component } from "react";
import FollowUs from "./follow";
import PopularNew from "./popular";
import Tags from "./tags";
import Newsletter from "./newsletter";
import { withRouter } from "react-router";

class SideBar extends Component {
  state = {};
  render() {
    const pathname = this.props.location.pathname !== "/";

    return (
      <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <div className="sidebar sidebar-right">
          {pathname && <FollowUs />}
          <PopularNew />
          {pathname && <Tags />}
          <Newsletter />
        </div>
      </div>
    );
  }
}

export default withRouter(SideBar);

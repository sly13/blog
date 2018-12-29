import React from "react";
import FollowUs from "../right-sidebar/follow";
import PopularNew from "../right-sidebar/popular";
import Tags from "../right-sidebar/tags";
import Newsletter from "../right-sidebar/newsletter";

const SideBar = () => {
  return (
    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div className="sidebar sidebar-right">
        <FollowUs />
        <PopularNew />
        <Tags />
        <Newsletter />
      </div>
    </div>
  );
};

export default SideBar;

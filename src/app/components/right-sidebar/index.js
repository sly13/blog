import React from "react";
import FollowUs from "./follow";
import PopularNew from "./popular";
import Tags from "./tags";
import Newsletter from "./newsletter";

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

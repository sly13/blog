import React, { Component } from "react";
import More from "./more";
import SideBar from "../../components/right-sidebar/index";

class Index extends Component {
  state = {};
  render() {
    return (
      <>
        <section className="block-wrapper p-bottom-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <More />
              </div>

              <SideBar />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Index;

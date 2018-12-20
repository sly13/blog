import React, { Component } from "react";
import More from "./More";
import Popular from "./Popular";
import NewsLetters from "./NewsLetters";

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

              <div className="col-lg-4 col-md-12">
                <div className="sidebar sidebar-right">
                  <Popular />

                  <NewsLetters />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Index;

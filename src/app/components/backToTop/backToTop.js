import React, { Component } from "react";
import $ from "jquery";

class BackToTop extends Component {
  state = {};

  componentDidMount() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 50) {
        $("#back-to-top").fadeIn();
      } else {
        $("#back-to-top").fadeOut();
      }
    });

    // scroll body to 0px on click
    $("#back-to-top").on("click", function() {
      $("#back-to-top").tooltip("hide");
      $("body,html").animate(
        {
          scrollTop: 0
        },
        800
      );
      return false;
    });

    $("#back-to-top").tooltip("hide");
  }

  render() {
    return (
      <div id="back-to-top" className="back-to-top">
        <button className="btn btn-primary" title="Back to Top">
          <i className="fa fa-angle-up" />
        </button>
      </div>
    );
  }
}

export default BackToTop;

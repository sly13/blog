import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import RelatedItem from "./related.item";

class RelatedPosts extends Component {
  state = {};
  render() {
    return (
      <div className="related-posts block">
        <h3 className="block-title">
          <span>Related Posts</span>
        </h3>

        <OwlCarousel
          id="latest-news-slide"
          className="owl-carousel owl-theme latest-news-slide"
          loop={false}
          animateIn="fadeInLeft"
          autoplay={false}
          autoplayHoverPause={true}
          nav={true}
          margin={30}
          dots={false}
          mouseDrag={false}
          //slideSpeed={500}
          navElement="div"
          navText={[
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
          ]}
          items={3}
        >
          <RelatedItem />
        </OwlCarousel>
      </div>
    );
  }
}

export default RelatedPosts;

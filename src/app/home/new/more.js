import React, { Component } from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { getMoreNews } from "../../../action";
import Item from "./item";
import { withRouter } from "react-router";

class More extends Component {
  state = {
    data: [],
    isLoaded: false
  };

  componentDidMount() {
    getMoreNews()
      .then(response => {
        this.setState({ data: response.data, isLoaded: true });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { isLoaded, data } = this.state;
    return (
      <>
        {isLoaded && (
          <div className="more-news block color-default">
            <h3 className="block-title">
              <span>Новости</span>
            </h3>

            {/* <div id="more-news-slide" className="owl-carousel owl-theme more-news-slide"> */}

            <OwlCarousel
              id="more-news-slide"
              className="owl-carousel owl-theme more-news-slide"
              loop={false}
              autoplay={false}
              autoplayHoverPause={true}
              nav={false}
              //margin='30'
              dots={true}
              mouseDrag={false}
              //slideSpeed={500}
              navElement="div"
              navText={[
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
              ]}
              items={1}
              //responsive= {[0:{items:1},600:{items:1}]}
            >
              <Item data={data} />
            </OwlCarousel>
          </div>
        )}
      </>
    );
  }
}

export default withRouter(More);

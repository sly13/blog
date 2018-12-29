import React, { Component } from "react";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Item from "./item";
import { getTrendingPost } from "../../../action";

class Trending extends Component {
  state = {
    data: [],
    isLoaded: false
  };

  componentDidMount() {
    getTrendingPost()
      .then(response => {
        console.log("response.data", response.data);
        this.setState({ data: response.data, isLoaded: true });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { isLoaded, data } = this.state;
    return (
      <>
        {isLoaded && (
          <div className="trending-bar d-md-block d-lg-block d-none">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="trending-title">cейчас в тренде</h3>

                  <OwlCarousel
                    id="trending-slide"
                    className="trending-slide owl-carousel owl-theme trending-slide"
                    loop={true}
                    animateIn="fadeIn"
                    autoplay={true}
                    autoplayTimeout="3000"
                    autoplayHoverPause={true}
                    nav={true}
                    //margin='30'
                    dots={false}
                    mouseDrag={false}
                    //slideSpeed={500}
                    navElement="div"
                    navText={[
                      "<i class='fa fa-angle-left'></i>",
                      "<i class='fa fa-angle-right'></i>"
                    ]}
                    items={1}
                  >
                    <Item data={data} />
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Trending;

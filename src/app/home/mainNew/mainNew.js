import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

//now not use
class MainNew extends Component {
  state = {};

  render() {
    const backgroundImageStyle1 = {
      backgroundImage: `url(../../../images/news/tea/nd86720.jpg)`
    };

    const backgroundImageStyle2 = {
      backgroundImage: `url(../../../images/news/tea/2014_08_13_04_001.jpg)`
    };

    const backgroundImageStyle3 = {
      backgroundImage: `url(../../../images/news/tea/chai-main.jpg)`
    };

    return (
      <>
        <div className="gap-40" />
        <section className="featured-post-area no-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-xs-12 pad-r">
                <OwlCarousel
                  id="featured-slider"
                  className="owl-carousel owl-theme featured-slider content-bottom"
                  loop={true}
                  animateIn="fadeIn"
                  autoplay={false}
                  autoplayTimeout="3000"
                  autoplayHoverPause={true}
                  nav={true}
                  //margin='0'
                  dots={false}
                  mouseDrag={true}
                  //slideSpeed={500}
                  navElement="div"
                  navText={[
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                  ]}
                  items={1}
                  //responsive= {[0:{items:1},600:{items:1}]}
                >
                  <div className="item" style={backgroundImageStyle1}>
                    <div className="featured-post">
                      <div className="post-content">
                        <a className="post-cat" href="/">
                          Health
                        </a>
                        <h2 className="post-title title-extra-large">
                          <a href="/">
                            Netcix cuts out the chill with an integrated
                            personal trainer on running
                          </a>
                        </h2>
                        <span className="post-date">March 16, 2017</span>
                      </div>
                    </div>
                  </div>

                  <div className="item" style={backgroundImageStyle2}>
                    <div className="featured-post">
                      <div className="post-content">
                        <a className="post-cat" href="/">
                          Gadget
                        </a>
                        <h2 className="post-title title-extra-large">
                          <a href="/">
                            Samsung Gear S3 review: A whimper, when smartwatches
                            need a bang
                          </a>
                        </h2>
                        <span className="post-date">March 16, 2017</span>
                      </div>
                    </div>
                  </div>

                  <div className="item" style={backgroundImageStyle3}>
                    <div className="featured-post">
                      <div className="post-content">
                        <a className="post-cat" href="/">
                          Travel
                        </a>
                        <h2 className="post-title title-extra-large">
                          <a href="/">
                            Hynopedia helps female travelers find health care in
                            Maldivs
                          </a>
                        </h2>
                        <span className="post-date">March 16, 2017</span>
                      </div>
                    </div>
                  </div>
                </OwlCarousel>
              </div>

              <div className="col-md-4 col-xs-12 pad-l">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="post-overaly-style text-center first clearfix">
                      <div className="post-thumb">
                        <a href="/">
                          <img
                            className="img-responsive"
                            src="../../../images/news/tea/teapuerlogo.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="post-content">
                        <a className="post-cat" href="/">
                          Gadgets
                        </a>
                        <h2 className="post-title title-medium">
                          <a href="/">
                            Samsung Gear S3 review: A whimper, when…
                          </a>
                        </h2>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="post-overaly-style text-center clearfix">
                      <div className="post-thumb">
                        <a href="/">
                          <img
                            className="img-responsive"
                            src="../../../images/news/tea/8121e2.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="post-content">
                        <a className="post-cat" href="/">
                          Games
                        </a>
                        <h2 className="post-title title-medium">
                          <a href="/">
                            Historical heroes and robot dinosaurs: New games...
                          </a>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default MainNew;

import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { getPriorityPosts } from "../../../action";
import Item from "./item";
import { chunk } from "lodash";
import { withRouter } from "react-router";

class MainNew extends Component {
  state = {
    data: [],
    isLoaded: false
  };

  componentDidMount() {
    getPriorityPosts()
      .then(response => {
        console.log("priority", response.data);
        this.setState({ data: response.data, isLoaded: true });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  redirect = path => {
    this.props.history.push(`/post/${path}`);
  };

  render() {
    const { isLoaded, data } = this.state;
    const split = chunk(data, 6);
    console.log(split[1]);
    const upPost = isLoaded ? split[1][0] : "";
    const downPost = isLoaded ? split[1][1] : "";

    return (
      <>
        {isLoaded && (
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
                      <Item data={split[0]} redirect={this.redirect} />
                      {/* <div className="item" style={backgroundImageStyle1}>
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
                                Samsung Gear S3 review: A whimper, when
                                smartwatches need a bang
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
                                Hynopedia helps female travelers find health
                                care in Maldivs
                              </a>
                            </h2>
                            <span className="post-date">March 16, 2017</span>
                          </div>
                        </div>
                      </div> */}
                    </OwlCarousel>
                  </div>

                  <div className="col-md-4 col-xs-12 pad-l">
                    <div className="row">
                      <div className="col-sm-12">
                        <div
                          className="post-overaly-style text-center first clearfix"
                          onClick={() => this.redirect(upPost.postSlug)}
                        >
                          <div className="post-thumb">
                            <Link to={`/post/${upPost.postSlug}`}>
                              <img
                                className="img-responsive"
                                src={upPost.imagePath}
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="post-content">
                            <Link
                              className="post-cat"
                              to={`/category/${upPost.categorySlug}`}
                            >
                              {upPost.category}
                            </Link>
                            <h2 className="post-title title-medium">
                              <Link to={`/post/${upPost.postSlug}`}>
                                {upPost.title}
                              </Link>
                            </h2>
                          </div>
                        </div>
                      </div>

                      <div className="col-sm-12">
                        <div
                          className="post-overaly-style text-center clearfix"
                          onClick={() => this.redirect(downPost.postSlug)}
                        >
                          <div className="post-thumb">
                            <Link to={`/post/${downPost.postSlug}`}>
                              <img
                                className="img-responsive"
                                src={downPost.imagePath}
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="post-content">
                            <Link
                              className="post-cat"
                              to={`/category/${downPost.categorySlug}`}
                            >
                              {downPost.category}
                            </Link>

                            <h2 className="post-title title-medium">
                              <Link to={`/post/${downPost.postSlug}`}>
                                {downPost.title}
                              </Link>
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
        )}
      </>
    );
  }
}

export default withRouter(MainNew);

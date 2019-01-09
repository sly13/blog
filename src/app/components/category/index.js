import React, { Component } from "react";
import Pagination from "../pagination";
import Tags from "./tags";
import Title from "./title";
import SideBar from "../right-sidebar";
import Items from "./items";
import { getNewsByCategory } from "../../../action";

class NewsByTag extends Component {
  state = {
    data: [],
    isLoaded: false,
    test: 1
  };

  componentDidMount() {
    console.log("here", this.props.match.params.slug);
    getNewsByCategory(this.props.match.params.slug)
      .then(response => {
        console.log("by Slug", response.data);
        this.setState({ data: response.data, isLoaded: true });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { isLoaded, data } = this.state;
    console.log(data);
    return (
      <>
        {isLoaded && (
          <section className="block-wrapper">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                  <div className="block category-listing">
                    <Title slug={data[0].category} />
                    <Tags />

                    <div className="row">
                      <Items data={data} />
                      {/* <div className="col-md-6 col-sm-6">
                        <div className="post-block-style post-grid clearfix">
                          <div className="post-thumb">
                            <a href="#">
                              <img
                                className="img-responsive"
                                src="../../../images/news/lifestyle/health5.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <a className="post-cat" href="#">
                            Health
                          </a>
                          <div className="post-content">
                            <h2 className="post-title title-large">
                              <a href="#">
                                Netcix cuts out the chill with an integrated
                                personal trainer on running
                              </a>
                            </h2>
                            <div className="post-meta">
                              <span className="post-author">
                                <a href="#">John Doe</a>
                              </span>
                              <span className="post-date">Feb 24, 2017</span>
                              <span className="post-comment pull-right">
                                <i className="fa fa-comments-o" />
                                <a href="#" className="comments-link">
                                  <span>03</span>
                                </a>
                              </span>
                            </div>
                            <p>
                              Lumbersexual meh sustainable Thundercats
                              meditation kogi. Tilde Pitchfork vegan, gentrify
                              minim elit semiotics non messenger bag Austin...
                            </p>
                          </div>
                        </div>
                      </div> */}

                      {/* <div className="col-md-6 col-sm-6">
                        <div className="post-block-style post-grid clearfix">
                          <div className="post-thumb">
                            <a href="#">
                              <img
                                className="img-responsive"
                                src="../../../images/news/lifestyle/travel5.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <a className="post-cat" href="#">
                            Travel
                          </a>
                          <div className="post-content">
                            <h2 className="post-title title-large">
                              <a href="#">
                                Hynopedia helps female travelers find health
                                care in Maldivs
                              </a>
                            </h2>
                            <div className="post-meta">
                              <span className="post-author">
                                <a href="#">John Doe</a>
                              </span>
                              <span className="post-date">Jan 09, 2017</span>
                              <span className="post-comment pull-right">
                                <i className="fa fa-comments-o" />
                                <a href="#" className="comments-link">
                                  <span>01</span>
                                </a>
                              </span>
                            </div>
                            <p>
                              Lumbersexual meh sustainable Thundercats
                              meditation kogi. Tilde Pitchfork vegan, gentrify
                              minim elit semiotics non messenger bag...
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="post-block-style post-grid clearfix">
                          <div className="post-thumb">
                            <a href="#">
                              <img
                                className="img-responsive"
                                src="../../../images/news/lifestyle/food4.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <a className="post-cat" href="#">
                            Food
                          </a>
                          <div className="post-content">
                            <h2 className="post-title title-large">
                              <a href="#">
                                Here's how to make Kevin's famous fish cutlet
                                from 'The Office'
                              </a>
                            </h2>
                            <div className="post-meta">
                              <span className="post-author">
                                <a href="#">John Doe</a>
                              </span>
                              <span className="post-date">March 05, 2017</span>
                              <span className="post-comment pull-right">
                                <i className="fa fa-comments-o" />
                                <a href="#" className="comments-link">
                                  <span>04</span>
                                </a>
                              </span>
                            </div>
                            <p>
                              Lumbersexual meh sustainable Thundercats
                              meditation kogi. Tilde Pitchfork vegan, gentrify
                              minim elit semiotics non messenger bag Austin...
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="post-block-style post-grid clearfix">
                          <div className="post-thumb">
                            <a href="#">
                              <img
                                className="img-responsive"
                                src="../../../images/news/lifestyle/health4.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <a className="post-cat" href="#">
                            Health
                          </a>
                          <div className="post-content">
                            <h2 className="post-title title-large">
                              <a href="#">
                                Smart packs parking sensor tech and beeps when
                                collisions
                              </a>
                            </h2>
                            <div className="post-meta">
                              <span className="post-author">
                                <a href="#">John Doe</a>
                              </span>
                              <span className="post-date">Feb 24, 2017</span>
                              <span className="post-comment pull-right">
                                <i className="fa fa-comments-o" />
                                <a href="#" className="comments-link">
                                  <span>04</span>
                                </a>
                              </span>
                            </div>
                            <p>
                              Lumbersexual meh sustainable Thundercats
                              meditation kogi. Tilde Pitchfork vegan, gentrify
                              minim elit semiotics non messenger bag...
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="post-block-style post-grid clearfix">
                          <div className="post-thumb">
                            <a href="#">
                              <img
                                className="img-responsive"
                                src="../../../images/news/lifestyle/architecture4.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <a className="post-cat" href="#">
                            Architecture
                          </a>
                          <div className="post-content">
                            <h2 className="post-title title-large">
                              <a href="#">
                                This beautiful home could be built using a hex
                                key in under 24 hours
                              </a>
                            </h2>
                            <div className="post-meta">
                              <span className="post-author">
                                <a href="#">John Doe</a>
                              </span>
                              <span className="post-date">Feb 24, 2017</span>
                              <span className="post-comment pull-right">
                                <i className="fa fa-comments-o" />
                                <a href="#" className="comments-link">
                                  <span>04</span>
                                </a>
                              </span>
                            </div>
                            <p>
                              Lumbersexual meh sustainable Thundercats
                              meditation kogi. Tilde Pitchfork vegan, gentrify
                              minim elit semiotics non messenger ...
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="post-block-style post-grid clearfix">
                          <div className="post-thumb">
                            <a href="#">
                              <img
                                className="img-responsive"
                                src="../../../images/news/lifestyle/travel4.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <a className="post-cat" href="#">
                            Travel
                          </a>
                          <div className="post-content">
                            <h2 className="post-title title-large">
                              <a href="#">
                                19 incredible photos from Disney's 'Star Wars'
                                cruise algore
                              </a>
                            </h2>
                            <div className="post-meta">
                              <span className="post-author">
                                <a href="#">John Doe</a>
                              </span>
                              <span className="post-date">Feb 24, 2017</span>
                              <span className="post-comment pull-right">
                                <i className="fa fa-comments-o" />
                                <a href="#" className="comments-link">
                                  <span>04</span>
                                </a>
                              </span>
                            </div>
                            <p>
                              Lumbersexual meh sustainable Thundercats
                              meditation kogi. Tilde Pitchfork vegan, gentrify
                              minim elit semiotics non messenger bag Austin...
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="post-block-style post-grid clearfix">
                          <div className="post-thumb">
                            <a href="#">
                              <img
                                className="img-responsive"
                                src="../../../images/news/lifestyle/health3.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <a className="post-cat" href="#">
                            Travel
                          </a>
                          <div className="post-content">
                            <h2 className="post-title title-large">
                              <a href="#">
                                Deleting fears from the brain means you might
                                never need to face them
                              </a>
                            </h2>
                            <div className="post-meta">
                              <span className="post-author">
                                <a href="#">John Doe</a>
                              </span>
                              <span className="post-date">Feb 24, 2017</span>
                              <span className="post-comment pull-right">
                                <i className="fa fa-comments-o" />
                                <a href="#" className="comments-link">
                                  <span>04</span>
                                </a>
                              </span>
                            </div>
                            <p>
                              Lumbersexual meh sustainable Thundercats
                              meditation kogi. Tilde Pitchfork vegan, gentrify
                              minim elit semiotics non messenger bag Austin...
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="post-block-style post-grid clearfix">
                          <div className="post-thumb">
                            <a href="#">
                              <img
                                className="img-responsive"
                                src="../../../images/news/lifestyle/food3.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <a className="post-cat" href="#">
                            Travel
                          </a>
                          <div className="post-content">
                            <h2 className="post-title title-large">
                              <a href="#">
                                You can now get paid to shove chocolate coffee
                                into your face hole
                              </a>
                            </h2>
                            <div className="post-meta">
                              <span className="post-author">
                                <a href="#">John Doe</a>
                              </span>
                              <span className="post-date">Feb 24, 2017</span>
                              <span className="post-comment pull-right">
                                <i className="fa fa-comments-o" />
                                <a href="#" className="comments-link">
                                  <span>04</span>
                                </a>
                              </span>
                            </div>
                            <p>
                              Lumbersexual meh sustainable Thundercats
                              meditation kogi. Tilde Pitchfork vegan, gentrify
                              minim elit semiotics non messenger bag Austi...
                            </p>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>

                  <Pagination />
                </div>

                <SideBar />
              </div>
            </div>
          </section>
        )}
      </>
    );
  }
}

export default NewsByTag;

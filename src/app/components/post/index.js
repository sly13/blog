import React, { Component } from "react";
import Comments from "./comments";
import CommentForm from "./comment.form";
import SideBar from "../right-sidebar";
import RelatedPosts from "./related";
import renderHTML from "react-render-html";

import { getPost } from "../../../action";
import BreadCrumbs from "../breadcrumbs";

class Index extends Component {
  state = {
    data: {},
    isLoaded: false
  };

  componentDidMount() {
    console.log("here", this.props.match.params.slug);
    getPost(this.props.match.params.slug)
      .then(response => {
        console.log("response", response.data);
        this.setState({ data: response.data, isLoaded: true });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    console.log("this.state.post", this.state.data);
    const { title, category, text } = this.state.data;
    return (
      <>
        {this.state.isLoaded && (
          <>
            <BreadCrumbs link={category} page={category} />

            <section className="block-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    <div className="single-post">
                      <div className="post-title-area">
                        <a className="post-cat" href="/">
                          Health
                        </a>
                        <h2 className="post-title">
                          {title && renderHTML(title)}
                        </h2>
                        <div className="post-meta">
                          <span className="post-author">
                            By <a href="/">John Doe</a>
                          </span>
                          <span className="post-date">
                            <i className="fa fa-clock-o" /> March 14, 2017
                          </span>
                          <span className="post-hits">
                            <i className="fa fa-eye" /> 21
                          </span>
                          <span className="post-comment">
                            <i className="fa fa-comments-o" />
                            <a href="/" className="comments-link">
                              <span>01</span>
                            </a>
                          </span>
                        </div>
                      </div>

                      <div className="post-content-area">
                        <div className="post-media post-featured-image">
                          <a
                            href="images/news/lifestyle/health5.jpg"
                            className="gallery-popup"
                          >
                            <img
                              src="images/news/lifestyle/health5.jpg"
                              className="img-responsive"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="entry-content">
                          <p>{text && renderHTML(text)}</p>

                          <p>
                            Throw myself down teems with vapour around me, and
                            the meridian sun strikes the upper surface of the
                            impenetrable foliage of my trees, and but a few
                            stray gleams steal into the inner sanctuary grow
                            familiar with the countless indescribable forms of
                            the insects and flies, then I feel the presence of
                            the Almighty, who formed us in his own image, and
                            the breath
                          </p>

                          <blockquote>
                            A wonderful serenity has taken possession of my
                            entire soul, like these sweet mornings of spring
                            which I enjoy with my whole heart. I am alone and
                            feel the charm of existence.
                          </blockquote>

                          <p>
                            Lo-fi cred gastropub, brunch aliquip stumptown
                            culpa. Banh mi eiusmod tattooed, freegan Schlitz
                            master cleanse pug. Eu 8-bit id PBR Pinterest
                            taxidermy, swag church-key Echo Park commodo yr.
                            Adipisicing leggings enim laboris wayfarers, cliche
                            Carles placeat typewriter mixtape cold-pressed. Etsy
                            Pitchfork Austin, selvage beard reprehenderit ea
                            ugh.
                          </p>

                          <p>
                            <img
                              src="images/news/news-details/news-details1.jpg"
                              className="img-responsive"
                              alt=""
                            />
                          </p>

                          <p>
                            Pitchfork kitsch plaid forage aliquip, sustainable
                            taxidermy deserunt health goth stumptown cred VHS
                            butcher. Mixtape fap Intelligentsia small batch
                            placeat labore, bitters swag chia Echo Park. Four
                            loko aliquip id, delectus beard Bushwick bespoke
                            Blue Bottle eu keytar veniam ethical High Life
                            pour-over.
                          </p>
                          <h3>
                            When, while the lovely valley teems with vapour
                            around me, and the meridian sun strikes.
                          </h3>
                          <p>
                            Art party photo booth deserunt exercitation plaid
                            squid. Minim Austin 3 wolf moon scenester aesthetic,
                            umami odio pariatur bitters. Pop-up occaecat
                            taxidermy street art, tattooed beard literally duis
                            photo booth Thundercats shabby chic. Velit non
                            seitan, tilde art party minim Thundercats viral.
                            Farm-to-table selfies labore, leggings cupidatat
                            sunt taxidermy umami fanny pack typewriter hoodie
                            art party voluptate cardigan banjo. Listicle
                            meditation paleo, drinking vinegar sint direct trade
                            vegan 3 wolf moon.
                          </p>
                          <h3>Farm-to-table selfies labore leggings:</h3>
                          <ul>
                            <li>Plaid fashion axe semiotics skateboard</li>
                            <li>
                              Mixtape fap Intelligentsia small batch placeat
                              labore
                            </li>
                            <li>Gleams steal into the inner sanctuary grow</li>
                            <li>Like these sweet mornings of spring which</li>
                          </ul>
                          <p>
                            High Life tempor retro Truffaut. Tofu mixtape twee,
                            assumenda quinoa flexitarian aesthetic artisan vinyl
                            pug. Chambray et Carles Thundercats cardigan
                            actually, magna bicycle rights. Plaid fashion axe
                            semiotics skateboard, try-hard food truck aesthetic
                            biodiesel exercitation. Accusamus VHS Wes Anderson
                            Banksy food truck vero.
                          </p>
                        </div>

                        <div className="tags-area clearfix">
                          <div className="post-tags">
                            <span>Tags:</span>
                            <a href="/"># Food</a>
                            <a href="/"># Lifestyle</a>
                            <a href="/"># Travel</a>
                          </div>
                        </div>

                        <div className="share-items clearfix">
                          <ul className="post-social-icons unstyled">
                            <li className="facebook">
                              <a href="/">
                                <i className="fa fa-facebook" />{" "}
                                <span className="ts-social-title">
                                  Facebook
                                </span>
                              </a>
                            </li>
                            <li className="twitter">
                              <a href="/">
                                <i className="fa fa-twitter" />{" "}
                                <span className="ts-social-title">Twitter</span>
                              </a>
                            </li>
                            <li className="gplus">
                              <a href="/">
                                <i className="fa fa-google-plus" />{" "}
                                <span className="ts-social-title">
                                  Google +
                                </span>
                              </a>
                            </li>
                            <li className="pinterest">
                              <a href="/">
                                <i className="fa fa-pinterest" />{" "}
                                <span className="ts-social-title">
                                  Pinterest
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <nav className="post-navigation clearfix">
                      <div className="post-previous">
                        <a href="/">
                          <span>
                            <i className="fa fa-angle-left" />
                            Previous Post
                          </span>
                          <h3>
                            Deleting fears from the brain means you might never
                            need to face them
                          </h3>
                        </a>
                      </div>
                      <div className="post-next">
                        <a href="/">
                          <span>
                            Next Post <i className="fa fa-angle-right" />
                          </span>
                          <h3>
                            Smart packs parking sensor tech and beeps when
                            collisions
                          </h3>
                        </a>
                      </div>
                    </nav>

                    <RelatedPosts> </RelatedPosts>
                    <Comments> </Comments>
                    <CommentForm> </CommentForm>
                  </div>
                  <SideBar> </SideBar>
                </div>
              </div>
            </section>
          </>
        )}
      </>
    );
  }
}

export default Index;

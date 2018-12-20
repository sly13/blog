import React, { Component } from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class More extends Component {
    state = {  }
    render() {
        return (

            <div className="more-news block color-default">
               <h3 className="block-title"><span>More News</span></h3>
   
               {/* <div id="more-news-slide" className="owl-carousel owl-theme more-news-slide"> */}
              
               <OwlCarousel id="more-news-slide" className="owl-carousel owl-theme more-news-slide" 
                                loop={false}
                                autoplay={false}
                                autoplayHoverPause={true}
                                nav={false}
                                //margin='30'
                                dots={true}
                                mouseDrag={false}
                                //slideSpeed={500}
                                navElement='div'
                                navText={["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]}
                                items={1}
                                //responsive= {[0:{items:1},600:{items:1}]}
                            > 

                 <div className="item">
                   <div className="post-block-style post-float-half clearfix">
                     <div className="post-thumb">
                       <a href="/">
                         <img className="img-fluid" src="images/news/video/video1.jpg" alt="" />
                       </a>
                     </div>
                     <a className="post-cat" href="/">Video</a>
                     <div className="post-content">
                        <h2 className="post-title">
                          <a href="/">KJerry's will sell food cream that tastes like your favorite video</a>
                        </h2>
                        <div className="post-meta">
                          <span className="post-author"><a href="/">John Doe</a></span>
                          <span className="post-date">Mar 29, 2017</span>
                        </div>
                        <p>Lumbersexual meh sustainable Thundercats meditation kogi. Tilde Pitchfork vegan, gentrify minim elit semiotics non messenger bag Austin which roasted ...</p>
                      </div>
                   </div>
   
                   <div className="gap-30"></div>
   
                   <div className="post-block-style post-float-half clearfix">
                     <div className="post-thumb">
                       <a href="/">
                         <img className="img-fluid" src="images/news/tech/game5.jpg" alt="" />
                       </a>
                     </div>
                     <a className="post-cat" href="/">Games</a>
                     <div className="post-content">
                        <h2 className="post-title">
                          <a href="/">Oazer and Lacon bring eSport expertise to new PS4 controllers</a>
                        </h2>
                        <div className="post-meta">
                          <span className="post-author"><a href="/">John Doe</a></span>
                          <span className="post-date">Mar 27, 2017</span>
                        </div>
                        <p>Pityful a rethoric question ran over her cheek When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of he...</p>
                      </div>
                   </div>
   
                   <div className="gap-30"></div>
   
                   <div className="post-block-style post-float-half clearfix">
                     <div className="post-thumb">
                       <a href="/">
                         <img className="img-fluid" src="images/news/tech/game4.jpg" alt="" />
                       </a>
                     </div>
                     <a className="post-cat" href="/">Games</a>
                     <div className="post-content">
                        <h2 className="post-title">
                          <a href="/">Super Tario Run isn’t groundbreaking, but it has Mintendo charm</a>
                        </h2>
                        <div className="post-meta">
                          <span className="post-author"><a href="/">John Doe</a></span>
                          <span className="post-date">Feb 24, 2017</span>
                        </div>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and ...</p>
                      </div>
                   </div>
   
                   <div className="gap-30"></div>
   
                   <div className="post-block-style post-float-half clearfix">
                     <div className="post-thumb">
                       <a href="/">
                         <img className="img-fluid" src="images/news/tech/robot5.jpg" alt="" />
                       </a>
                     </div>
                     <a className="post-cat" href="/">Robotics</a>
                     <div className="post-content">
                        <h2 className="post-title">
                          <a href="/">Robots in hospitals can be quite handy to navigate around the ho…</a>
                        </h2>
                        <div className="post-meta">
                          <span className="post-author"><a href="/">John Doe</a></span>
                          <span className="post-date">Feb 24, 2017</span>
                        </div>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and ...</p>
                      </div>
                   </div>
                 </div>
   
                 <div className="item">
                   <div className="post-block-style post-float-half clearfix">
                     <div className="post-thumb">
                       <a href="/">
                         <img className="img-fluid" src="images/news/video/video2.jpg" alt="" />
                       </a>
                     </div>
                     <a className="post-cat" href="/">Video</a>
                     <div className="post-content">
                        <h2 className="post-title">
                          <a href="/">TG G6 will have dual 13-megapixel cameras on the back</a>
                        </h2>
                        <div className="post-meta">
                          <span className="post-author"><a href="/">John Doe</a></span>
                          <span className="post-date">Mar 29, 2017</span>
                        </div>
                        <p>Lumbersexual meh sustainable Thundercats meditation kogi. Tilde Pitchfork vegan, gentrify minim elit semiotics non messenger bag Austin which roasted ...</p>
                      </div>
                   </div>
   
                   <div className="gap-30"></div>
   
                   <div className="post-block-style post-float-half clearfix">
                     <div className="post-thumb">
                       <a href="/">
                         <img className="img-fluid" src="images/news/video/video3.jpg" alt="" />
                       </a>
                     </div>
                     <a className="post-cat" href="/">Video</a>
                     <div className="post-content">
                        <h2 className="post-title">
                          <a href="/">Breeze through 17 locations in Europe in this breathtaking v…</a>
                        </h2>
                        <div className="post-meta">
                          <span className="post-author"><a href="/">John Doe</a></span>
                          <span className="post-date">Mar 31, 2017</span>
                        </div>
                        <p>Pityful a rethoric question ran over her cheek When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of he...</p>
                      </div>
                   </div>
   
                   <div className="gap-30"></div>
   
                   <div className="post-block-style post-float-half clearfix">
                     <div className="post-thumb">
                       <a href="/">
                         <img className="img-fluid" src="images/news/lifestyle/architecture1.jpg" alt="" />
                       </a>
                     </div>
                     <a className="post-cat" href="/">Architecture</a>
                     <div className="post-content">
                        <h2 className="post-title">
                          <a href="/">Science meets architecture in robotically woven, solar...</a>
                        </h2>
                        <div className="post-meta">
                          <span className="post-author"><a href="/">John Doe</a></span>
                          <span className="post-date">Mar 23, 2017</span>
                        </div>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and ...</p>
                      </div>
                   </div>
   
                   <div className="gap-30"></div>
   
                   <div className="post-block-style post-float-half clearfix">
                     <div className="post-thumb">
                       <a href="/">
                         <img className="img-fluid" src="images/news/tech/game1.jpg" alt="" />
                       </a>
                     </div>
                     <a className="post-cat" href="/">Robotics</a>
                     <div className="post-content">
                        <h2 className="post-title">
                          <a href="/">Historical heroes and robot dinosaurs: New games on our…</a>
                        </h2>
                        <div className="post-meta">
                          <span className="post-author"><a href="/">John Doe</a></span>
                          <span className="post-date">Feb 24, 2017</span>
                        </div>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and ...</p>
                      </div>
                   </div>
                 </div>
                 </OwlCarousel>
               {/* </div> */}
             </div>
        );
    }
}

export default More;
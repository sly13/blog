import React, { Component } from 'react';

class Menu extends Component {
    state = {  }
    render() {
        return (
            <>
            <div className="main-nav clearfix">
            <div className="container">
              <div className="row">
                <nav className="navbar navbar-expand-lg col">
                  <div className="site-nav-inner float-left">
                       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                       </button>
        
                    <div id="navbarSupportedContent" className="collapse navbar-collapse navbar-responsive-collapse">
                      <ul className="nav navbar-nav">
                        <li className="nav-item dropdown active">
                          <a href="#" className="nav-link" data-toggle="dropdown">Home <i className="fa fa-angle-down"></i></a>
                          <ul className="dropdown-menu" role="menu">
                            <li><a href="index.html">Home 1</a></li>
                            <li><a href="index-2.html">Home 2</a></li>
                            <li className="active"><a href="index-3.html">Home 3</a></li>
                            <li><a href="index-4.html">Home 4</a></li>
                            <li><a href="index-5.html">Home 5</a></li>
                          </ul>
                        </li>
        
                        <li className="nav-item dropdown mega-dropdown">
                          <a href="category-style1.html" className="nav-link dropdown-toggle" data-toggle="dropdown"
                               role="button" aria-haspopup="true" aria-expanded="false">Lifestyle <i className="fa fa-angle-down"></i></a>
                          <div className="dropdown-menu mega-menu-content clearfix">
                            <div className="menu-tab">
                              <div className="row">
                                <ul className="nav nav-tabs flex-column col-2" data-toggle="tab-hover">
                                  <li className="nav-item">
                                    <a className= "nav-link animated fadeIn active " href="#tab-A" data-toggle="tab" aria-selected="true">
                                      <span className="tab-head">
                                      <span className="tab-text-title">Health</span>					
                                    </span>
                                    </a>
                                  </li>
                                  <li className="nav-item">
                                    <a className="nav-link animated fadeIn" href="#tab-B" data-toggle="tab"  aria-selected="false">
                                      <span className="tab-head">
                                      <span className="tab-text-title">Travel</span>					
                                    </span>
                                    </a>
                                </li>
                                 <li className="nav-item">
                                    <a className="nav-link animated fadeIn" href="#tab-C" data-toggle="tab" aria-selected="false">
                                      <span className="tab-head">
                                      <span className="tab-text-title">Food</span>					
                                    </span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link animated fadeIn" href="#tab-D" data-toggle="tab" aria-selected="false">
                                      <span className="tab-head">
                                      <span className="tab-text-title">Architecture</span>					
                                    </span>
                                    </a>
                                </li>
                              </ul>
        
                              <div className="tab-content col-10">
                                  <div className="tab-pane fade show active" id="tab-A">
                                    <div className="row">
                                      <div className="col-md-3">
                                        
                                        <div className="post-block-style clearfix">
                                        <div className="post-thumb">
                                          <a href="#"><img className="img-fluid" src="images/news/lifestyle/health1.jpg" alt="" /></a>
                                        </div>
                                        <a className="post-cat" href="#">Health</a>
                                        <div className="post-content">
                                           <h2 className="post-title title-small">
                                             <a href="#">That wearable on your wrist could soon track your…</a>
                                           </h2>
                                         </div>
                                      </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="post-block-style clearfix">
                                        <div className="post-thumb">
                                          <a href="#"><img className="img-fluid" src="images/news/lifestyle/health2.jpg" alt="" /></a>
                                        </div>
                                        <a className="post-cat" href="#">Health</a>
                                        <div className="post-content">
                                           <h2 className="post-title title-small">
                                             <a href="#">Can't shed those Gym? The problem might be in your…</a>
                                           </h2>
                                         </div>
                                      </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="post-block-style clearfix">
                                        <div className="post-thumb">
                                          <a href="#"><img className="img-fluid" src="images/news/lifestyle/health3.jpg" alt="" /></a>
                                        </div>
                                        <a className="post-cat" href="#">Health</a>
                                        <div className="post-content">
                                           <h2 className="post-title title-small">
                                             <a href="#">Deleting fears from the brain means you might neve…</a>
                                           </h2>
                                         </div>
                                      </div></div>
                                      <div className="col-md-3">
                                        <div className="post-block-style clearfix">
                                        <div className="post-thumb">
                                          <a href="#"><img className="img-fluid" src="images/news/lifestyle/health4.jpg" alt="" /></a>
                                        </div>
                                        <a className="post-cat" href="#">Health</a>
                                        <div className="post-content">
                                           <h2 className="post-title title-small">
                                             <a href="#">Smart packs parking sensor tech and beeps when col…</a>
                                           </h2>
                                         </div>
                                      </div></div>
                                    </div>
                                  </div>
        
                                  <div className="tab-pane animated fadeIn" id="tab-B">
                                    <div className="row">
                                      <div className="col-md-3">
                                        <div className="post-block-style clearfix">
                                        <div className="post-thumb">
                                          <a href="#"><img className="img-fluid" src="images/news/lifestyle/travel1.jpg" alt="" /></a>
                                        </div>
                                        <a className="post-cat" href="#">Travel</a>
                                        <div className="post-content">
                                           <h2 className="post-title title-small">
                                             <a href="#">That wearable on your wrist could soon track your…</a>
                                           </h2>
                                         </div>
                                      </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="post-block-style clearfix">
                                        <div className="post-thumb">
                                          <a href="#"><img className="img-fluid" src="images/news/lifestyle/travel2.jpg" alt="" /></a>
                                        </div>
                                        <a className="post-cat" href="#">Travel</a>
                                        <div className="post-content">
                                           <h2 className="post-title title-small">
                                             <a href="#">Can't shed those Gym? The problem might be in your…</a>
                                           </h2>
                                         </div>
                                      </div>
                                      </div>
                                      <div className="col-md-3">
                                        <div className="post-block-style clearfix">
                                        <div className="post-thumb">
                                          <a href="#"><img className="img-fluid" src="images/news/lifestyle/travel3.jpg" alt="" /></a>
                                        </div>
                                        <a className="post-cat" href="#">Travel</a>
                                        <div className="post-content">
                                           <h2 className="post-title title-small">
                                             <a href="#">Deleting fears from the brain means you might neve…</a>
                                           </h2>
                                         </div>
                                      </div>
                                      </div>
                                        
                                    <div className="col-md-3">
                                      <div className="post-block-style clearfix">
                                    <div className="post-thumb">
                                      <a href="#"><img className="img-fluid" src="images/news/lifestyle/travel4.jpg" alt="" /></a>
                                    </div>
                                    <a className="post-cat" href="#">Travel</a>
                                    <div className="post-content">
                                       <h2 className="post-title title-small">
                                         <a href="#">Smart packs parking sensor tech and beeps when col…</a>
                                       </h2>
                                     </div>
                                  </div>
                                    </div>
                                      </div>
                                    </div>
                                      <div className="tab-pane animated fadeIn" id="tab-C">
                                   <div className="row">
                                       <div className="col-md-3">
                                         <div className="post-block-style clearfix">
                                        <div className="post-thumb">
                                          <a href="#"><img className="img-fluid" src="images/news/lifestyle/food1.jpg" alt="" /></a>
                                        </div>
                                        <a className="post-cat" href="#">Food</a>
                                        <div className="post-content">
                                           <h2 className="post-title title-small">
                                             <a href="#">That wearable on your wrist could soon track your…</a>
                                           </h2>
                                         </div>
                                      </div>
                                        
                                        
                                       </div>
                                       <div className="col-md-3">
                                         <div className="post-block-style clearfix">
                                        <div className="post-thumb">
                                          <a href="#"><img className="img-fluid" src="images/news/lifestyle/food2.jpg" alt="" /></a>
                                        </div>
                                        <a className="post-cat" href="#">Food</a>
                                        <div className="post-content">
                                           <h2 className="post-title title-small">
                                             <a href="#">Can't shed those Gym? The problem might be in your…</a>
                                           </h2>
                                         </div>
                                      </div>
                                       </div>
                                       <div className="col-md-3">
                                         <div className="post-block-style clearfix">
                                        <div className="post-thumb">
                                          <a href="#"><img className="img-fluid" src="images/news/lifestyle/food3.jpg" alt="" /></a>
                                        </div>
                                        <a className="post-cat" href="#">Food</a>
                                        <div className="post-content">
                                           <h2 className="post-title title-small">
                                             <a href="#">Deleting fears from the brain means you might neve…</a>
                                           </h2>
                                         </div>
                                      </div>
                                       </div>
                                       <div className="col-md-3">
                                         
                                        <div className="post-block-style clearfix">
                                        <div className="post-thumb">
                                          <a href="#"><img className="img-fluid" src="images/news/lifestyle/food4.jpg" alt="" /></a>
                                        </div>
                                        <a className="post-cat" href="#">Food</a>
                                        <div className="post-content">
                                           <h2 className="post-title title-small">
                                             <a href="#">Smart packs parking sensor tech and beeps when col…</a>
                                           </h2>
                                         </div>
                                      </div>
                                       </div>
                                   </div> 		
                                  </div>
        
                                  </div> 
                              </div>
                            </div>
                          </div>
                        </li>
        
                        <li>
                          <a href="category-style2.html">Technology</a>
                        </li>
        
                        <li className="dropdown nav-item mega-dropdown">
                          <a href="#" className="nav-link dropdown-toggler" data-toggle="dropdown">Video <i className="fa fa-angle-down"></i></a>
                          <div className="dropdown-menu mega-menu-content clearfix">
                            <div className="mega-menu-content-inner">
                              <div className="row">
                                  <div className="col-md-3">
                                    <div className="post-block-style clearfix">
                                    <div className="post-thumb">
                                      <img className="img-fluid" src="images/news/video/video4.jpg" alt="" />
                                      <a className="popup" href="https://www.youtube.com/embed/XhveHKJWnOQ?autoplay=1&amp;loop=1">
                                              <div className="video-icon">
                                                <i className="fa fa-play"></i>
                                             </div>
                                          </a>
                                     </div>
                                    <div className="post-content">
                                       <h2 className="post-title title-small">
                                         <a href="#">Netcix cuts out the chill with an integrated...</a>
                                       </h2>
                                     </div>
                                  </div>
                                  </div>
        
                                  <div className="col-md-3">
                                    <div className="post-block-style clearfix">
                                    <div className="post-thumb">
                                       <img className="img-fluid" src="images/news/video/video3.jpg" alt="" />
                                      <a className="popup" href="https://www.youtube.com/embed/wJF5NXygL4k?autoplay=1&amp;loop=1">
                                          <div className="video-icon">
                                            <i className="fa fa-play"></i>
                                         </div>
                                      </a>
                                    </div>
                                    <div className="post-content">
                                       <h2 className="post-title title-small">
                                         <a href="#">Netcix cuts out the chill with an integrated...</a>
                                       </h2>
                                     </div>
                                  </div>
                                  </div>
        
                                  <div className="col-md-3">
                                    <div className="post-block-style clearfix">
                                    <div className="post-thumb">
                                       <img className="img-fluid" src="images/news/video/video2.jpg" alt="" />
                                      <a className="popup" href="https://www.youtube.com/embed/DQNDcxRo-2M?autoplay=1&amp;loop=1">
                                          <div className="video-icon">
                                            <i className="fa fa-play"></i>
                                         </div>
                                      </a>
                                    </div>
                                    <div className="post-content">
                                       <h2 className="post-title title-small">
                                         <a href="#">TG G6 will have dual 13-megapixel cameras...</a>
                                       </h2>
                                     </div>
                                  </div>
                                  </div>
                                  <div className="col-md-3">
                                    <div className="post-block-style clearfix">
                                    <div className="post-thumb">
                                       <img className="img-fluid" src="images/news/video/video1.jpg" alt="" />
                                      <a className="popup" href="https://www.youtube.com/embed/DQNDcxRo-2M?autoplay=1&amp;loop=1">
                                          <div className="video-icon">
                                            <i className="fa fa-play"></i>
                                         </div>
                                      </a>
                                    </div>
                                    <div className="post-content">
                                       <h2 className="post-title title-small">
                                         <a href="#">Netcix cuts out the chill with an integrated...</a>
                                       </h2>
                                     </div>
                                  </div>
                                  </div>
                                </div>
                            </div> 
                            
                          </div>
                        </li>
        
                        <li>
                          <a href="category-style4.html">Travel</a>
                        </li>
        
                        <li className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown">Features <i className="fa fa-angle-down"></i></a>
                          <ul className="dropdown-menu" role="menu">
                            <li className="dropdown-submenu">
                              <a href="#.">Category Layouts</a>
                              <ul className="dropdown-menu">
                                <li><a href="category-style1.html">Category Style 1</a></li>
                                <li><a href="category-style2.html">Category Style 2</a></li>
                                <li><a href="category-style3.html">Category Style 3</a></li>
                                <li><a href="category-style4.html">Category Style 4</a></li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a href="#.">Post Formates</a>
                              <ul className="dropdown-menu">
                                <li><a href="single-post1.html">Single Post 1</a></li>
                                <li><a href="single-post2.html">Single Post 2</a></li>
                                <li><a href="single-post3.html">Single Post 3</a></li>
                                <li><a href="single-post4.html">Single Post 4</a></li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a href="#.">Sidebar</a>
                              <ul className="dropdown-menu">
                                <li><a href="left-sidebar.html">Left Sidebar</a></li>
                                <li><a href="single-post1.html">Right Sidebar</a></li>
                                <li><a href="no-sidebar.html">No Sidebar</a></li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a href="#.">Shortcodes</a>
                              <ul className="dropdown-menu">
                                <li><a href="typography.html">Typography</a></li>
                                <li><a href="blockquote.html">Blockquotes</a></li>
                                <li><a href="tabs.html">Tabs</a></li>
                              </ul>
                            </li>
                            <li className="dropdown-submenu">
                              <a href="#.">Pages</a>
                              <ul className="dropdown-menu">
                                <li><a href="author.html">Author</a></li>
                                <li><a href="404.html">404</a></li>
                                <li><a href="contact.html">Contact</a></li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
        
                  </div>
                </nav>
        
                <div className="nav-search">
                  <span id="search"><i className="fa fa-search"></i></span>
                </div>
                
                <div className="search-block" style={style}>
                  <input type="text" className="form-control" placeholder="Type what you want and enter"/>
                  <span className="search-close">&times;</span>
                </div>
        
              </div>
            </div>
        
          </div>
          </>
        );
    }
}

let style = {
 display: 'none'
}

export default Menu;
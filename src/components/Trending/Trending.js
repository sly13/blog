import React, { Component } from 'react';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Trending extends Component {
    state = {  }
    render() {
        return (
            <>
                <div className="trending-light d-md-block d-lg-block d-none">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-12">
                            <h3 className="trending-title">Trending Now</h3>

                            <OwlCarousel id="trending-slide"     className="trending-slide owl-carousel owl-theme trending-slide" 
                                loop={true}
                                animateIn='fadeIn'
                                autoplay={true}
                                autoplayTimeout='3000'
                                autoplayHoverPause={true}
                                nav={true}
                                //margin='30'
                                dots={false}
                                mouseDrag={false}
                                //slideSpeed={500}
                                navElement='div'
                                navText={["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]}
                                items={1}
                            >

                            <div className="item">
                                <div className="post-content">
                                    <h2 className="post-title title-small">
                                        <a href="/">The best MacBook Pro alternatives in 2017 for Apple users</a>
                                    </h2>
                                </div>
                            </div>
                            <div className="item">
                                <div className="post-content">
                                    <h2 className="post-title title-small">
                                        <a href="/">Soaring through Southern Patagonia with the Premium Byrd drone</a>
                                    </h2>
                                </div>
                            </div>
                            <div className="item">
                                <div className="post-content">
                                    <h2 className="post-title title-small">
                                        <a href="/">Super Tario Run isn’t groundbreaking, but it has Mintendo charm</a>
                                    </h2>
                                </div>
                            </div>

                            </OwlCarousel>

                        </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Trending;
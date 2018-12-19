import React, { Component } from 'react';

class Trending extends Component {
    state = {  }
    render() {
        return (
            <>
                <div class="trending-light d-md-block d-lg-block d-none">
                    <div class="container">
                        <div class="row">
                        <div class="col-md-12">
                            <h3 class="trending-title">Trending Now</h3>
                            <div id="trending-slide" class="owl-carousel owl-theme trending-slide">
                            <div class="item">
                                <div class="post-content">
                                    <h2 class="post-title title-small">
                                        <a href="/">The best MacBook Pro alternatives in 2017 for Apple users</a>
                                    </h2>
                                </div>
                            </div>
                            <div class="item">
                                <div class="post-content">
                                    <h2 class="post-title title-small">
                                        <a href="/">Soaring through Southern Patagonia with the Premium Byrd drone</a>
                                    </h2>
                                </div>
                            </div>
                            <div class="item">
                                <div class="post-content">
                                    <h2 class="post-title title-small">
                                        <a href="/">Super Tario Run isn’t groundbreaking, but it has Mintendo charm</a>
                                    </h2>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Trending;
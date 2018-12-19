import React, { Component } from 'react';



class MainNew extends Component {
    state = {  }
    render() {
        const backgroundImageStyle1 = {
            backgroundImage: 'url(../../images/news/lifestyle/health5.jpg)'
        } 

        const backgroundImageStyle2 = {
            backgroundImage: 'url(../../images/news/tech/gadget2.jpg)'
        } 
        
        const backgroundImageStyle3 = {
            backgroundImage: 'url(../../images/news/lifestyle/travel5.jpg)'
        } 
        
        return (
            <>
                <section class="featured-post-area no-padding">
                    <div class="container">
                        <div class="row">
                        <div class="col-lg-8 col-md-12 pad-r">
                            <div id="featured-slider" class="owl-carousel owl-theme featured-slider content-bottom">
                            
                            <div class="item" style={backgroundImageStyle1}>
                                <div class="featured-post">
                                    <div class="post-content">
                                    <a class="post-cat" href="#">Health</a>
                                    <h2 class="post-title title-extra-large">
                                        <a href="#">Netcix cuts out the chill with an integrated personal trainer on running</a>
                                    </h2>
                                    <span class="post-date">March 16, 2017</span>
                                    </div>
                                </div>
                            </div>

                            <div class="item" style={backgroundImageStyle2}>
                                <div class="featured-post">
                                    <div class="post-content">
                                    <a class="post-cat" href="#">Gadget</a>
                                    <h2 class="post-title title-extra-large">
                                        <a href="#">Samsung Gear S3 review: A whimper, when smartwatches need a bang</a>
                                    </h2>
                                    <span class="post-date">March 16, 2017</span>
                                    </div>
                                </div>
                            </div>
                
                            <div class="item" style={backgroundImageStyle3}>
                                <div class="featured-post">
                                    <div class="post-content">
                                    <a class="post-cat" href="#">Travel</a>
                                    <h2 class="post-title title-extra-large">
                                        <a href="#">Hynopedia helps female travelers find health care in Maldivs</a>
                                    </h2>
                                    <span class="post-date">March 16, 2017</span>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                
                        <div class="col-lg-4 col-md-12 pad-l">
                            <div class="row">
                            <div class="col-md-12">
                                <div class="post-overaly-style text-center first clearfix">
                                <div class="post-thumb">
                                    <a href="#"><img class="img-fluid" src="../../images/news/tech/gadget2.jpg" alt="" /></a>
                                </div>
                                <div class="post-content">
                                    <a class="post-cat" href="#">Gadgets</a>
                                    <h2 class="post-title title-medium">
                                        <a href="#">Samsung Gear S3 review: A whimper, when…</a>
                                    </h2>
                                    </div>
                                </div>
                            </div>
                
                            <div class="col-md-12">
                                <div class="post-overaly-style text-center clearfix">
                                <div class="post-thumb">
                                    <a href="#"><img class="img-fluid" src="../../images/news/tech/game1.jpg" alt="" /></a>
                                </div>
                                <div class="post-content">
                                    <a class="post-cat" href="#">Games</a>
                                    <h2 class="post-title title-medium">
                                        <a href="#">Historical heroes and robot dinosaurs: New games...</a>
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
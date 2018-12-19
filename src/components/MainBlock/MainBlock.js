import React, { Component } from 'react';

class MainBlock extends Component {
    state = {  }
    render() {
        return (
            <>
            <section class="block-wrapper">
       <div class="container">
         <div class="row">
   
          
         </div>
       </div>
     </section>

            <section class="block-wrapper solid-bg">
       <div class="container">
         <div class="row">
           <div class="col-md-4 pad-r">
             <div class="post-overaly-style text-center first clearfix">
               <div class="post-thumb">
                 <a href="#"><img class="img-fluid" src="images/news/tech/gadget2.jpg" alt="" /></a>
               </div>
               <div class="post-content">
                  <a class="post-cat" href="#">Gadgets</a>
                  <h2 class="post-title">
                    <a href="#">Samsung Gear S3 review: A whimper, when…</a>
                  </h2>
                  <div class="post-meta">
                    <span class="post-date">Feb 06, 2017</span>
                 </div>
                </div>
             </div>
           </div>
   
           <div class="col-md-4 pad-0">
             <div class="post-overaly-style text-center clearfix">
               <div class="post-thumb">
                 <a href="#"><img class="img-fluid" src="images/news/lifestyle/health5.jpg" alt="" /></a>
               </div>
               <div class="post-content">
                  <a class="post-cat" href="#">Health</a>
                  <h2 class="post-title">
                    <a href="#">Netcix cuts out the chill with an integrated personal...</a>
                  </h2>
                  <div class="post-meta">
                    <span class="post-date">Feb 06, 2017</span>
                 </div>
                </div>
             </div>
           </div>
   
           <div class="col-md-4 pad-l">
             <div class="post-overaly-style text-center clearfix">
               <div class="post-thumb">
                 <a href="#"><img class="img-fluid" src="images/news/tech/game1.jpg" alt="" /></a>
               </div>
               <div class="post-content">
                  <a class="post-cat" href="#">Games</a>
                  <h2 class="post-title">
                    <a href="#">Historical heroes and robot dinosaurs: New games...</a>
                  </h2>
                  <div class="post-meta">
                    <span class="post-date">Feb 06, 2017</span>
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

export default MainBlock;
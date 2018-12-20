import React, { Component } from 'react';

class NewsLetters extends Component {
    state = {  }
    render() {
        return (
            <div className="widget m-bottom-0">
                 <h3 className="block-title"><span>Newsletter</span></h3>
                 <div className="ts-newsletter">
                   <div className="newsletter-introtext">
                     <h4>Get Updates</h4>
                     <p>Subscribe our newsletter to get the best stories into your inbox!</p>
                   </div>
   
                   <div className="newsletter-form">
                     <form action="/" method="post">
                       <div className="form-group">
                         <input type="email" name="email" id="newsletter-form-email" className="form-control form-control-lg" placeholder="E-mail" autoComplete="off"/>
                         <button className="btn btn-primary">Subscribe</button>
                       </div>
                     </form>
                   </div>
                 </div>
               </div>
        );
    }
}

export default NewsLetters;
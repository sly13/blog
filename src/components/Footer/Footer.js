import React, { Component } from 'react';
import Info from './Info'
import BackToTop from '../BackToTop/BackToTop'

class Footer extends Component {
    state = {  }
    render() {
        return (
            <>
            <Info/>
               <div className="copyright">
               <div className="container">
                  <div className="row">
                     <div className="col-sm-12 col-md-6">
                        <div className="copyright-info">
                           <span>Copyright © 2017 News247 All Rights Reserved. Designed By Tripples</span>
                        </div>
                     </div>
      
                     <div className="col-sm-12 col-md-6">
                        <div className="footer-menu">
                           <ul className="nav unstyled">
                              <li><a href="/">Site Terms</a></li>
                              <li><a href="/">Privacy</a></li>
                              <li><a href="/">Advertisement</a></li>
                              <li><a href="/">Cookies Policy</a></li>
                              <li><a href="/">Contact Us</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
      
                  <BackToTop></BackToTop>
      
               </div>
         </div>
            </>
        );
    }
}

export default Footer;
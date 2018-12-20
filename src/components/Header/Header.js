import React, { Component } from 'react';

class Header extends Component {
    state = {  }
    render() {
        return (
            <>	
                <header id="header" className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 text-center">
                                <div className="logo">
                                    <a href="index.html">
                                        <img src="images/logos/logo.png" alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        );
    }
}

export default Header;
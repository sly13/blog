import React, { Component } from 'react';
import $ from 'jquery'

class Search extends Component {
    state = {  }

    componentDidMount() {
        $('.nav-search').on('click', function () {
            $('.search-block').fadeIn(350);
       });
   
        $('.search-close').on('click', function(){
            $('.search-block').fadeOut(350);
        });
    }
    render() {
        const style = {
            display: 'none'
           }
        return (
            <>
            <div className="nav-search">
                  <span id="search"><i className="fa fa-search"></i></span>
                </div>
                
                <div className="search-block" style={style}>
                  <input type="text" className="form-control" placeholder="Type what you want and enter"/>
                  <span className="search-close">&times;</span>
                </div>
                </>
        );
    }
}

export default Search;
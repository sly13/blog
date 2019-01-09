import React, { Component } from "react";

class Items extends Component {
  state = {};
  render() {
    console.log("props", this.props);

    const elements = this.props.data.map(item => (
      <div className="col-md-6 col-sm-6" key={item.id}>
        <div className="post-block-style post-grid clearfix">
          <div className="post-thumb">
            <a href="/">
              <img className="img-responsive" src={item.imagePath} alt="" />
            </a>
          </div>
          <a className="post-cat" href="/">
            Travel
          </a>
          <div className="post-content">
            <h2 className="post-title title-large">
              <a href="/">
                Hynopedia helps female travelers find health care in Maldivs
              </a>
            </h2>
            <div className="post-meta">
              <span className="post-author">
                <a href="/">John Doe</a>
              </span>
              <span className="post-date">Jan 09, 2017</span>
              <span className="post-comment pull-right">
                <i className="fa fa-comments-o" />
                <a href="/" className="comments-link">
                  <span>01</span>
                </a>
              </span>
            </div>
            <p>
              Lumbersexual meh sustainable Thundercats meditation kogi. Tilde
              Pitchfork vegan, gentrify minim elit semiotics non messenger
              bag...
            </p>
          </div>
        </div>
      </div>
    ));

    return <>{elements}</>;
  }
}

export default Items;

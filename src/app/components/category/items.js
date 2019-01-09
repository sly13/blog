import React, { Component } from "react";

class Items extends Component {
  state = {};
  render() {
    console.log("props", this.props);

    const elements = this.props.data.map(item => (
      <div class="col-md-6 col-sm-6" key={item.id}>
        <div class="post-block-style post-grid clearfix">
          <div class="post-thumb">
            <a href="/">
              <img class="img-responsive" src={item.imagePath} alt="" />
            </a>
          </div>
          <a class="post-cat" href="/">
            Travel
          </a>
          <div class="post-content">
            <h2 class="post-title title-large">
              <a href="/">
                Hynopedia helps female travelers find health care in Maldivs
              </a>
            </h2>
            <div class="post-meta">
              <span class="post-author">
                <a href="/">John Doe</a>
              </span>
              <span class="post-date">Jan 09, 2017</span>
              <span class="post-comment pull-right">
                <i class="fa fa-comments-o" />
                <a href="/" class="comments-link">
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

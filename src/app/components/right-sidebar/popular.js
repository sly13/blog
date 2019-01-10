import React, { Component } from "react";
import { getPopularNews } from "../../../action";
import { Link } from "react-router-dom";
import { getFormatedDate } from "../../../helper";

class PopularNew extends Component {
  state = {
    data: [],
    mainPost: {},
    isLoaded: false
  };

  componentDidMount() {
    getPopularNews()
      .then(response => {
        console.log("response popular", response.data);
        const mainPost = response.data.shift();

        console.log("mainPost", mainPost);

        //const news = response.data;
        this.setState({
          data: response.data,
          isLoaded: true,
          mainPost: mainPost
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { mainPost, data, isLoaded } = this.state;

    const elements = data.map(item => {
      return (
        <li className="clearfix" key={item.id}>
          <div className="post-block-style post-float clearfix">
            <div className="post-thumb">
              <Link to={`/post/${item.postSlug}`}>
                <img className="img-responsive" src={item.imagePath} alt="" />
              </Link>

              <Link className="post-cat" to={`/category/${item.categorySlug}`}>
                {item.category}
              </Link>
            </div>

            <div className="post-content">
              <h2 className="post-title title-small">
                <Link to={`/post/${item.postSlug}`}>{item.title}</Link>
              </h2>
              <div className="post-meta">
                <span className="post-date">
                  {getFormatedDate(mainPost.timeCreated)}
                </span>
              </div>
            </div>
          </div>
        </li>
      );
    });

    return (
      <>
        {isLoaded && (
          <>
            <div className="widget color-default">
              <h3 className="block-title">
                <span>Популярное</span>
              </h3>

              <div className="post-overaly-style clearfix">
                <div className="post-thumb">
                  <a href="/">
                    <img
                      className="img-responsive"
                      src="../../../images/news/lifestyle/health4.jpg"
                      alt=""
                    />
                  </a>
                </div>

                <div className="post-content">
                  <Link
                    className="post-cat"
                    to={`/category/${mainPost.categorySlug}`}
                  >
                    {mainPost.category}
                  </Link>

                  <h2 className="post-title title-small">
                    <Link to={`/post/${mainPost.postSlug}`}>
                      {mainPost.title}
                    </Link>
                  </h2>
                  <div className="post-meta">
                    <span className="post-date">
                      {getFormatedDate(mainPost.timeCreated)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="list-post-block">
                <ul className="list-post">{elements}</ul>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default PopularNew;

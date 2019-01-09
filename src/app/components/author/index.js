import React from "react";
import BreadCrumbs from "../breadcrumbs/index";
const Author = () => {
  return (
    <>
      <BreadCrumbs link="author" page="Автор" />

      <section class="block-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              <div class="author-box">
                <div class="author-img pull-left">
                  <img src="images/news/author.png" alt="" />
                </div>
                <div class="author-info">
                  <h3>Elina Themen</h3>
                  <div class="author-counter pull-right">
                    <span>8 Posts</span>
                    <span>2 Comments</span>
                  </div>
                  <p class="author-url">
                    <a href="/">http://www.newsdaily247.com</a>
                  </p>
                  <p>
                    Selfies labore, leggings cupidatat sunt taxidermy umami
                    fanny pack typewriter hoodie art party voluptate. Listicle
                    meditation paleo, drinking vinegar sint direct trade.
                  </p>
                  <div class="authors-social">
                    <span>Follow Me: </span>
                    <a href="/">
                      <i class="fa fa-behance" />
                    </a>
                    <a href="/">
                      <i class="fa fa-twitter" />
                    </a>
                    <a href="/">
                      <i class="fa fa-facebook" />
                    </a>
                    <a href="/">
                      <i class="fa fa-google-plus" />
                    </a>
                    <a href="/">
                      <i class="fa fa-pinterest-p" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Author;

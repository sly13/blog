import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          LOGO
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar1"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbar1">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="http://bootstrap-ecommerce.com">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link  dropdown-toggle"
                href="/"
                data-toggle="dropdown"
              >
                Category
              </a>
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" to="category-list">
                    List
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="category-create">
                    Create
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="/"
                data-toggle="dropdown"
              >
                Post
              </a>
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" to="post-list">
                    List
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="post-create">
                    Create
                  </Link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Dashboard
              </Link>
            </li>
            {/* <li class="nav-item">
              <a
                class="btn ml-2 btn-warning"
                href="http://bootstrap-ecommerce.com"
              >
                Download
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;

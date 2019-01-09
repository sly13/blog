import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = {};

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          LOGO
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar1"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbar1">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/admin">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link  dropdown-toggle"
                href="/"
                data-toggle="dropdown"
              >
                Category
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/category-list">
                    List
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/category-create">
                    Create
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                data-toggle="dropdown"
              >
                Post
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/post-list">
                    List
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/post-create">
                    Create
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Dashboard
              </Link>
            </li>
            {/* <li className="nav-item">
              <a
                className="btn ml-2 btn-warning"
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

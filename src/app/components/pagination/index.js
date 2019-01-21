import React, { Component } from "react";
import Pagination from "react-js-pagination";

class PagesPagination extends Component {
  state = {};
  render() {
    const isShow = this.props.perPage < this.props.data.length;
    return (
      <>
        {isShow && (
          <div className="paging">
            <Pagination
              innerClass="pagination center-align"
              activePage={this.props.activePage}
              itemsCountPerPage={this.props.perPage}
              totalItemsCount={this.props.data.length}
              pageRangeDisplayed={this.props.pages}
              onChange={this.props.handlePageChange}
              hideFirstLastPages
            />

            {/* <ul className="pagination">
          <li className="active">
            <a href="/">1</a>
          </li>
          <li>
            <a href="/">2</a>
          </li>
          <li>
            <a href="/">3</a>
          </li>
          <li>
            <a href="/">4</a>
          </li>
          <li>
            <a href="/">»</a>
          </li>
          <li>
            <span className="page-numbers">Page 1 of 2</span>
          </li>
        </ul> */}
          </div>
        )}
      </>
    );
  }
}

export default PagesPagination;

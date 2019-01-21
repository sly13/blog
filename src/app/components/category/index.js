import React, { Component } from "react";
import PagesPagination from "../pagination";
import Tags from "./tags";
import Title from "./title";
import SideBar from "../right-sidebar";
import Items from "./items";
import { getNewsByCategory } from "../../../action";

class NewsByTag extends Component {
  state = {
    data: [],
    isLoaded: false,
    activePage: 1,
    currentPage: 1,
    perPage: 8
  };

  componentDidMount() {
    this.getData(this.props.match.params.slug);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.slug !== nextProps.match.params.slug) {
      this.getData(nextProps.match.params.slug);
    }
  }

  getData = slug => {
    getNewsByCategory(slug)
      .then(response => {
        this.setState({ data: response.data, isLoaded: true });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handlePageChange = pageNumber => {
    this.setState({ activePage: pageNumber, currentPage: pageNumber });
  };

  render() {
    const { isLoaded, data } = this.state;
    const { perPage, currentPage, activePage } = this.state;
    const pages = Math.ceil(data.length / perPage);
    const start_offset = (currentPage - 1) * perPage;

    return (
      <section className="block-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
              {isLoaded && data.length !== 0 ? (
                <>
                  <div className="block category-listing">
                    <Title slug={data[0].category} />
                    <Tags />

                    <div className="row">
                      <Items
                        data={data}
                        perPage={perPage}
                        start_offset={start_offset}
                        activePage={activePage}
                        pages={pages}
                      />
                    </div>
                  </div>

                  <PagesPagination
                    data={data}
                    perPage={perPage}
                    start_offset={start_offset}
                    activePage={activePage}
                    pages={pages}
                    handlePageChange={this.handlePageChange}
                  />
                </>
              ) : (
                "Нет новостей"
              )}
            </div>

            <SideBar />
          </div>
        </div>
      </section>
    );
  }
}

export default NewsByTag;

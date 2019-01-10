import React, { Component } from "react";
import { Router, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import Main from "./app/pages/main";
import DefaultLayout from "./app/layouts/default.layout";
import AdminLayout from "./app/layouts/admin.layout";
import Admin from "./app/admin";
import CategoryList from "./app/admin/components/categoty";
import CategoryCreate from "./app/admin/components/categoty/create";
import PostList from "./app/admin/components/post";
import Post from "./app/components/post";
import NewsByTag from "./app/components/category/index";
import PostCreate from "./app/admin/components/post/create";
import Author from "./app/components/author";
import Contact from "./app/components/contact";
import { Route } from "react-router4-with-layouts";
import ScrollToTop from "./ScrollToTop";

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" layout={DefaultLayout} component={Main} />
            <Route path="/post/:slug" layout={DefaultLayout} component={Post} />
            <Route path="/author" layout={DefaultLayout} component={Author} />
            <Route path="/contact" layout={DefaultLayout} component={Contact} />
            <Route path="/about" layout={DefaultLayout} component={Author} />
            <Route
              path="/category/:slug"
              layout={DefaultLayout}
              component={NewsByTag}
            />
            <Route path="/admin" layout={AdminLayout} component={Admin} />
            <Route
              path="/category-list"
              layout={AdminLayout}
              component={CategoryList}
            />
            <Route
              path="/category-create"
              layout={AdminLayout}
              component={CategoryCreate}
            />
            <Route
              path="/post-list"
              layout={AdminLayout}
              component={PostList}
            />
            <Route
              path="/post-create"
              layout={AdminLayout}
              component={PostCreate}
            />
            {/* <Route
            exact
            path="/post/:id"
            layout={AdminLayout}
            component={PostView}
          /> */}
          </Switch>
          {/* <div className="body-inner">
          <Trending />
          <PreHeader />
          <Header />
          <Menu />

          <MainNew />
          <MainBlock />
          <New />

          <Footer /> 
        </div>*/}
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;

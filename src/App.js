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
import PostCreate from "./app/admin/components/post/create";
import PostView from "./app/admin/components/post/view";
import { Route } from "react-router4-with-layouts";

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" layout={DefaultLayout} component={Main} />
          <Route path="/test" layout={DefaultLayout} component={Test} />
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
          <Route path="/post-list" layout={AdminLayout} component={PostList} />
          <Route
            path="/post-create"
            layout={AdminLayout}
            component={PostCreate}
          />
          <Route
            exact
            path="/post/:id"
            layout={AdminLayout}
            component={PostView}
          />
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
      </Router>
    );
  }
}

class Test extends Component {
  state = {};
  render() {
    return <h1>Test1</h1>;
  }
}

export default App;

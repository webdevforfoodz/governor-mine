import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Loader from "./loader";

// ROUTES
import OnPageChange from "../utilities/hocs/OnPageChange";

// HEADER & FOOTER
import Header from "../components/header/Header";

// CONTAINERS & COMPONENTS
import Page404 from "../components/page404";

// LAZY IMPORT
const Farm = lazy(() => import("../components/farm"));

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <OnPageChange>
            <Header />
            <Switch>
              <Route
                exact
                path={"/farm"}
                render={() => <Farm {...this.props} />}
              />
              <Route path={"/404"} component={Page404} />
              <Redirect to={"/404"} />
            </Switch>
          </OnPageChange>
        </Suspense>
      </BrowserRouter>
    );
  }
}

export default Routes;

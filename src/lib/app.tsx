import * as React from "react";
import Page from "../components/pages/page"
import Header from "../components/layout/header"
import Footer from "../components/layout/footer"
import NotFound from "../components/error_pages/not_found"

import {
  HashRouter,
  Switch,
  Route
} from "react-router-dom"

export default function App(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Page} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
      <Footer />
    </div>
  )
}

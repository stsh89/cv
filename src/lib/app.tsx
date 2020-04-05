import * as React from "react";
import Page from "../components/pages/page"
import Header from "../components/layout/header"
import Footer from "../components/layout/footer"
import NotFound from "../components/error_pages/not_found"

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"

export default function App(): JSX.Element {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <div className="app">
            <Header />
            <Page />
            <Footer />
          </div>
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

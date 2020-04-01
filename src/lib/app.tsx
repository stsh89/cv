import * as React from "react";
import Page from "../components/pages/page"
import Header from "../components/layout/header"
import Footer from "../components/layout/footer"

export default function App(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <Page />
      <Footer />
    </div>
  )
}

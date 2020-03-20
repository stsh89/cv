import Page from "../components/page";
import * as React from "react";
import * as ReactDOM from "react-dom";

export default function init(): void {
  ReactDOM.render(
    <Page />,
    document.getElementById("root")
  )
}

import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./app";

export default function init(): void {
  ReactDOM.render(
    <App />,
    document.getElementById("app")
  )
}

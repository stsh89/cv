import * as React from "react";
import * as ReactDOM from "react-dom";
import Console from "../components/console";

export default function init(): void {
  ReactDOM.render(
    <Console />,
    document.getElementById("virt")
  )
}

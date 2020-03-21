import * as React from "react"

export default function List(props: {children: JSX.Element[]}): JSX.Element {
  return <ul className="list">{props.children}</ul>
}

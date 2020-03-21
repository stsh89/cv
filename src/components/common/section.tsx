import * as React from "react"

export default function Section(props: {children: JSX.Element[]}): JSX.Element {
  return <div className="section">{props.children}</div>
}

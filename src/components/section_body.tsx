import * as React from "react"

export default function SectionTitle(props: {children: JSX.Element[]}): JSX.Element {
  return <div className="section-body">{props.children}</div>
}

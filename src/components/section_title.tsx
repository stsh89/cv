import * as React from "react"

export default function SectionTitle(props: {name: string}): JSX.Element {
  return <h2 className="section-title">{props.name}</h2>
}

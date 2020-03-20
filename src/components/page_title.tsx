import * as React from "react"

export default function PageTitle(props: {name: string}): JSX.Element {
  return <h1 className="page-title">{props.name}</h1>
}

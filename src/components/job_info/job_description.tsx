import * as React from "react"

export default function JobDescription(props: {
  kind: string, text: string, key: string
}): JSX.Element {
  return (
    <div>{props.kind}: {props.text}</div>
  )
}

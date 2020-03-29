import * as React from "react"

export default function Progress(props: {
  labelId: string,
  title: string,
  value: number
}):JSX.Element {
  return (
    <div className="homepage-progress">
      <label className="homepage-progress__label" htmlFor={props.labelId}>{props.title}</label>&nbsp;
      <progress
        id={props.labelId} max="100" value={props.value}
        className="homepage-progress__bar">
      </progress>
    </div>
  )
}

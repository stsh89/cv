import * as React from "react"

export default function Progress(props: {
  labelId: string;
  title: string;
  value: number;
}): JSX.Element {
  return (
    <div className="page-progress">
      <label className="page-progress__label" htmlFor={props.labelId}>{props.title}</label>&nbsp;
      <progress
        id={props.labelId} max="100" value={props.value}
        className="page-progress__bar">
      </progress>
    </div>
  )
}

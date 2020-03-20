import * as React from "react"

export default function TimeFrame(props: {from: string, to: string}): JSX.Element {
  return (
    <div className="job-time-frame">{props.from} -- {props.to}</div>
  )
}

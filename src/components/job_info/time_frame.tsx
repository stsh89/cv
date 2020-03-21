import * as React from "react"

export default function TimeFrame(props: {from: string, to: string}): JSX.Element {
  return (
    <div className="time-frame">
      <span className="time-bulb">{props.from}</span> -- <span className="time-bulb">{props.to}</span>
    </div>
  )
}

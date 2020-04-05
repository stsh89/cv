import * as React from "react"

export default function Circulator(props: {
  text: string;
  borderColor: string;
  textColor: string;
}): JSX.Element {
  return(
    <svg width="120" height="120">
      <circle cx="50%" cy="50%" r="50" fill="none"
        stroke={props.borderColor} stroke-dasharray="32" stroke-width="2">
        <animateTransform attributeName="transform"
          attributeType="XML" type="rotate" from="0 60 60"
          to="360 60 60" dur="3s" begin="0" repeatCount="indefinite"/>
      </circle>
      <text x="60" y="60" dominant-baseline="middle" text-anchor="middle"
        fill={props.textColor} font-weight="bold">{props.text}</text>
    </svg>
  )
}

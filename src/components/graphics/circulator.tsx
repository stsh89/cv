import * as React from "react"

export default function Circulator(props: {
  text: string;
  borderColor: string;
  textColor: string;
}): JSX.Element {
  return(
    <svg width="120" height="120">
      <circle cx="50%" cy="50%" r="50" fill="none"
        stroke={props.borderColor} strokeDasharray="32" strokeWidth="2">
        <animateTransform attributeName="transform"
          attributeType="XML" type="rotate" from="0 60 60"
          to="360 60 60" dur="3s" begin="0" repeatCount="indefinite"/>
      </circle>
      <text x="60" y="60" dominantBaseline="middle" textAnchor="middle"
        fill={props.textColor} fontWeight="bold">{props.text}</text>
    </svg>
  )
}

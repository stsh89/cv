import * as React from "react"

export default function PersonalInfo():JSX.Element {
  return (
    <div className="page-block">
      <p>Personal info:</p>
      <ul className="page-list">
        <li>Date of birth: 17th September 1989</li>
        <li>Marital status: single</li>
        <li>Country: Ukraine</li>
      </ul>
    </div>
  )
}

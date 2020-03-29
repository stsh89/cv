import * as React from "react"
import ProgressBar from "../common/progress"

export default function Skills():JSX.Element {
  return (
    <div className="homepage-block">
      <p>Skills:</p>
      <div className="home-page-progress-list">
        <ProgressBar labelId={"front-end-progress"} title={"Front-End"} value={40} />
        <ProgressBar labelId={"back-end-progress"} title={"Back-End"} value={90} />
        <ProgressBar labelId={"dev-ops-progress"} title={"Dev-ops"} value={10} />
        <ProgressBar labelId={"soft-skill-progress"} title={"Soft-skill"} value={60} />
      </div>
    </div>
  )
}

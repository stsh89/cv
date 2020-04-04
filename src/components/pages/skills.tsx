import * as React from "react"
import Progress from "./progress"

export default function Skills(): JSX.Element {
  return (
    <div className="page-block">
      <p>Skills:</p>
      <div className="page-progress-list">
        <Progress labelId={"front-end-progress"} title={"Front-End"} value={40} />
        <Progress labelId={"back-end-progress"} title={"Back-End"} value={90} />
        <Progress labelId={"dev-ops-progress"} title={"Dev-ops"} value={10} />
        <Progress labelId={"soft-skill-progress"} title={"Soft-skill"} value={60} />
      </div>
    </div>
  )
}

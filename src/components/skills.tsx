import * as React from "react"
import PageSection from "./page_section"

export default function Skills(props: { listOfSkills: string[] }): JSX.Element {
  const skills = props.listOfSkills.map((skill, index) => {
      return <li key={`skill-${index}`}>{skill}</li>
  })

  const content = [<ul>{skills}</ul>]

  return (
    <PageSection title="Skills">
      {content}
    </PageSection>
  )
}

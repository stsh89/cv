import * as React from "react"
import List from "./common/list"
import PageSection from "./page_section"

export default function Skills(props: { listOfSkills: string[] }): JSX.Element {
  const skills = props.listOfSkills.map((skill, index) => {
      return <li className="list-item" key={`skill-${index}`}>{skill}</li>
  })

  const content = [<List>{skills}</List>]

  return (
    <PageSection title="Skills">
      {content}
    </PageSection>
  )
}

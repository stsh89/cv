import * as React from "react"
import Section from "./common/section"
import SectionTitle from "./section_title"

export default function Skills(props: { listOfSkills: string[] }): JSX.Element {
  const skills = props.listOfSkills.map((skill, index) => {
      return <li key={`skill-${index}`}>{skill}</li>
  })

  return (
    <Section>
      <div>
        <SectionTitle name={"Skills"} />
        <ul>{skills}</ul>
      </div>
    </Section>
  )
}

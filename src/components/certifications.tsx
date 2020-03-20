import * as React from "react"
import Section from "./common/section"
import SectionTitle from "./section_title"

export default function Skills(props: { listOfCertifications: string[] }): JSX.Element {
  const certifications = props.listOfCertifications.map((certification, index) => {
      return <li key={`certification-${index}`}>{certification}</li>
  })

  return (
    <Section>
      <div>
        <SectionTitle name={"Certifications"} />
        <ul>{certifications}</ul>
      </div>
    </Section>
  )
}

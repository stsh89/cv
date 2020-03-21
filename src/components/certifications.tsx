import * as React from "react"
import PageSection from "./page_section"

export default function Skills(props: { listOfCertifications: string[] }): JSX.Element {
  const certifications = props.listOfCertifications.map((certification, index) => {
      return <li key={`certification-${index}`}>{certification}</li>
  })

  const content = [<ul>{certifications}</ul>]

  return (
    <PageSection title={"Certifications"}>
      {content}
    </PageSection>
  )
}

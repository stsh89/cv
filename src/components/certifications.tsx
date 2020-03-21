import * as React from "react"
import PageSection from "./page_section"

export default function Skills(props: { listOfCertifications: string[] }): JSX.Element {
  const certifications = props.listOfCertifications.map((certification, index) => {
      return <p key={`certification-${index}`}>{certification}</p>
  })

  return (
    <PageSection title={"Certifications"}>
      {certifications}
    </PageSection>
  )
}

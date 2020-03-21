import * as React from "react"
import PageSection from "./page_section"

export default function PersonalInfo(props: {
  dateOfBirth: string, maritalStatus: string
}): JSX.Element {
  const content = [
    <ul>
      <li>Date of birth: {props.dateOfBirth}</li>
      <li>Marital status: {props.maritalStatus}</li>
    </ul>
  ]

  return (
    <PageSection title="Personal Info">
      {content}
    </PageSection>
  )
}

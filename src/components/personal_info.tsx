import * as React from "react"
import List from "./common/list"
import PageSection from "./page_section"

export default function PersonalInfo(props: {
  dateOfBirth: string, maritalStatus: string
}): JSX.Element {
  const content = [
    <List>
      <li className="list-item">Date of birth: {props.dateOfBirth}</li>
      <li className="list-item">Marital status: {props.maritalStatus}</li>
    </List>
  ]

  return (
    <PageSection title="Personal Info">
      {content}
    </PageSection>
  )
}

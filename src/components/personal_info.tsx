import * as React from "react"
import Section from "./common/section"
import PageTitle from "./page_title"

export default function PersonalInfo(props: {
  dateOfBirth: string, maritalStatus: string
}): JSX.Element {
  return (
    <Section>
      <div>
        <ul>
          <li>Date of birth: {props.dateOfBirth}</li>
          <li>Marital status: {props.maritalStatus}</li>
        </ul>
      </div>
    </Section>
  )
}

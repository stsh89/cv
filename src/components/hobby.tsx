import * as React from "react"
import PageSection from "./page_section"

export default function Hooby(props: { hobbies: string }): JSX.Element {
  const content = [<p>{props.hobbies}</p>]

  return (
    <PageSection title="Hobbies">
      {content}
    </PageSection>
  )
}

import * as React from "react"
import Section from "./common/section"
import SectionTitle from "./section_title"

export default function Hooby(props: { hobbies: string }): JSX.Element {
  return (
    <Section>
      <div>
        <SectionTitle name={"Hobbies"} />
        <p>{props.hobbies}</p>
      </div>
    </Section>
  )
}

import * as React from "react"
import Section from "./common/section"
import SectionTitle from "./section_title"
import SectionBody from "./section_body"

export default function PageSection(props: {title: string, children: JSX.Element[]}): JSX.Element {
  return (
    <Section>
      <SectionTitle name={props.title} />
      <SectionBody>{props.children}</SectionBody>
    </Section>
  )
}

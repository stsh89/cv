import * as React from "react"
import Section from "./common/section"
import SectionTitle from "./section_title"

export default function Profile(props: {
  summary: string, contacts: {kind: string, identifier: string}[]
}): JSX.Element {
  const contacts = props.contacts.map(function(contact) {
    return(
      <li key={contact.kind + contact.identifier}>
        {contact.kind}: {contact.identifier}
      </li>
    )
  })

  return (
    <Section>
      <div>
        <SectionTitle name={"Profile"} />
        <p>{props.summary}</p>
        <p>Contacts</p>
        <ul>
          {contacts}
        </ul>
      </div>
    </Section>
  )
}

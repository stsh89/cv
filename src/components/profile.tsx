import * as React from "react"
import PageSection from "./page_section"

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
    <PageSection title="Profile">
      <p>{props.summary}</p>
      <p>Contacts</p>
      <ul>
        {contacts}
      </ul>
    </PageSection>
  )
}

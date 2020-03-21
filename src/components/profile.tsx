import * as React from "react"
import List from "./common/list"
import PageSection from "./page_section"

export default function Profile(props: {
  summary: string, contacts: {kind: string, identifier: string}[]
}): JSX.Element {
  const contacts = props.contacts.map(function(contact) {
    return(
      <li className="list-item" key={contact.kind + contact.identifier}>
        {contact.kind}: {contact.identifier}
      </li>
    )
  })

  return (
    <PageSection title="Profile">
      <p>{props.summary}</p>
      <p>Contacts</p>
      <List>
        {contacts}
      </List>
    </PageSection>
  )
}

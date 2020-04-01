import * as React from "react"

export default function Contacts(): JSX.Element {
  return (
    <div className="page-block">
      <p>Contacts:</p>
      <ul className="page-list">
        <li>E-mail: <a className="page-link" href="mailto:stanislavshandyga@gmail.com">stanislavshandyga@gmail.com</a></li>
        <li>Telegram: <a className="page-link" href="https://t.me/iW7xYVKP6OMU5qwF">Stan</a></li>
      </ul>
    </div>
  )
}

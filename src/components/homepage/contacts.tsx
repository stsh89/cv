import * as React from "react"

export default function Contacts(): JSX.Element {
  return (
    <div className="homepage-block">
      <p>Contacts:</p>
      <ul className="homepage-list">
        <li>E-mail: <a className="homepage-link" href="mailto:stanislavshandyga@gmail.com">stanislavshandyga@gmail.com</a></li>
        <li>Telegram: <a className="homepage-link" href="https://t.me/iW7xYVKP6OMU5qwF">Stan</a></li>
      </ul>
    </div>
  )
}

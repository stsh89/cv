import * as React from "react"
import * as userInfo from "../../../data/user_info.json"

export default function Homepage(): JSX.Element {
  return (
    <div className="homepage">
      <div className="homepage-body">
        <div className="homepage-body__overview">
          <section className="homepage-section">
            <h2 className="homepage-section__title">Profile</h2>
            <p className="homepage-section__text">{userInfo.summary}</p>
          </section>
        </div>
        <div className="homepage-body__summary">
          <h1 className="homepage-title">{userInfo.name}</h1>
          <h2 className="homepage-subtitle">{userInfo.position}</h2>
          <div className="homepage-block">
            <p>Contacts:</p>
            <ul className="homepage-list">
              <li>E-mail: stanislavshandyga@gmail.com</li>
              <li>Telegram: <a className="homepage-link" href="https://t.me/iW7xYVKP6OMU5qwF">Stan</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

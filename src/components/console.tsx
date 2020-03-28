import * as React from "react"
import * as userInfo from "..//../data/user_info.json"

export default function Console(): JSX.Element {
  return (
    <div className="console">
      <div className="dashboard">
        <div className="dashboard__overview">
          <section>
            <h2>Profile</h2>
            <p>{userInfo.summary}</p>
          </section>
        </div>
        <div className="dashboard__summary">
          <h1>{userInfo.name}</h1>
          <h2>{userInfo.position}</h2>
          <section>
            <p>Contacts:</p>
            <ul className="list">
              <li>E-mail: stanislavshandyga@gmail.com</li>
              <li>Telegram: <a className="link" href="https://t.me/iW7xYVKP6OMU5qwF">Stan</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

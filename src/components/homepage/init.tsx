import * as React from "react"
import * as userInfo from "../../../data/user_info.json"
import Contacts from "./contacts"

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
          <Contacts />
        </div>
      </div>
      <div className="homepage-footer">
        <p className="homepage-footer__text">
          This is free and unencumbered software released into the public domain.
          For more information, please refer to <a className="homepage-link" href="https://unlicense.org">https://unlicense.org</a>
        </p>
        <p className="homepage-footer__text">
         2020 CV <a className="homepage-link" href="https://stsh89.github.io/cv/">https://stsh89.github.io/cv/</a>
        </p>
      </div>
    </div>
  )
}

import * as React from "react"
import * as userInfo from "../../../data/user_info.json"
import Contacts from "./contacts"
import PersonalInfo from "./personal_info"
import TechnologySummary from "./technology_summary"
import Skills from "./skills"

export default function Homepage(): JSX.Element {
  return (
    <main className="page">
      <div className="page-body">
        <div className="page-body__overview">
          <section className="page-section">
            <h2 className="page-section__title">Profile</h2>
            <p className="page-section__text">{userInfo.summary}</p>
          </section>
        </div>
        <div className="page-body__summary">
          <h1 className="page-title">{userInfo.name}</h1>
          <h2 className="page-subtitle">{userInfo.position}</h2>
          <PersonalInfo />
          <Contacts />
          <TechnologySummary />
          <Skills />
        </div>
      </div>
    </main>
  )
}

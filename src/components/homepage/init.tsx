import * as React from "react"
import * as userInfo from "../../../data/user_info.json"
import Contacts from "./contacts"
import PersonalInfo from "./personal_info"
import TechnologySummary from "./technology_summary"
import Skills from "./skills"
import Footer from "./footer"
import Header from "./header"

export default function Homepage(): JSX.Element {
  return (
    <div className="homepage">
      <Header />
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
          <PersonalInfo />
          <Contacts />
          <TechnologySummary />
          <Skills />
        </div>
      </div>
      <Footer />
    </div>
  )
}

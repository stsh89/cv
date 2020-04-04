import * as React from "react"
import * as userInfo from "../../../data/user_info.json"
import Contacts from "./contacts"
import PersonalInfo from "./personal_info"
import TechnologySummary from "./technology_summary"
import Skills from "./skills"
import Certification from "./certification"
import Hobby from "./hobby"
import TimeBoard from "./time_board"

function buildSection(info: {
  timeFrame: {from: string; to: string};
  companyInfo: {link: string; text: string};
  descriptions: {kind: string; text: string}[];
}[]): JSX.Element[] {
  return info.map((info, i) => {
    return (
      <TimeBoard
        key={i}
        timeFrame={info.timeFrame}
        companyInfo={info.companyInfo}
        descriptions={info.descriptions}
      />
    )
  })
}

export default function Homepage(): JSX.Element {
  const WorkExperience = buildSection(userInfo.workExperience)
  const education = buildSection(userInfo.education)

  return (
    <main className="page">
      <div className="page-body">
        <div className="page-body__overview">
          <section className="page-section">
            <h3 className="page-section__title">Profile</h3>
            <div className="page-section__text">{userInfo.summary}</div>
          </section>
          <section className="page-section">
            <h3 className="page-section__title">Work Experience</h3>
            {WorkExperience}
          </section>
          <section className="page-section">
            <h3 className="page-section__title">Education</h3>
            {education}
          </section>
          <Certification />
          <Hobby />
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

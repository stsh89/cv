import * as React from "react"
import * as userInfo from "../../../data/user_info.json"
import Contacts from "./contacts"
import PersonalInfo from "./personal_info"
import TechnologySummary from "./technology_summary"
import Skills from "./skills"
import Certification from "./certification"
import Hobby from "./hobby"

function buildSection(info: any, code: string): any {
  const sections = info.map((info: any, i: number) => {
    const descriptions = info.descriptions.map((description: any, j: number) => {
      return (
        <div key={i + j + "code"}>
          <p>{description.kind}: {description.text}</p>
        </div>
      )
    })

    const companyInfo =
      [
        <a className="page-link" href="{info.companyInfo.siteLink}">{info.companyInfo.siteLink}</a>,
        ", ",
        info.companyInfo.companyName,
        ", ",
        info.companyInfo.jobTitle
      ]

    return (
      <div className="page-section__text" key={i + "code"}>
        <p>{info.timeFrame.from} - {info.timeFrame.to}</p>
        <p>{companyInfo}</p>
        {descriptions}
      </div>
    )
  })

  return sections
}

export default function Homepage(): JSX.Element {
  const work_experience = buildSection(userInfo.workExperience, "work")
  const education = buildSection(userInfo.education, "education")

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
            {work_experience}
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

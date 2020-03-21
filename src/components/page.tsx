import * as React from "react"
import PageTitle from "./page_title"
import PersonalInfo from "./personal_info"
import Profile from "./profile"
import WorkExperience from "./work_experience"
import Education from "./education"
import Certifications from "./certifications"
import Skills from "./skills"
import Hobby from "./hobby"
import Footer from "./footer"
import * as userInfo from "../../data/user_info.json"

export default function Page(): JSX.Element {
  return (
    <div className="page">
      <div className="page-body">
        <PageTitle name={userInfo.name} />
        <div className="">{userInfo.position}</div>
        <PersonalInfo
          dateOfBirth={userInfo.dateOfBirth}
          maritalStatus={userInfo.maritalStatus}
        />
        <Profile
          summary={userInfo.summary}
          contacts={userInfo.contacts}
        />
        <WorkExperience jobs={userInfo.jobs} />
        <Education educations={userInfo.educations} />
        <Certifications listOfCertifications={userInfo.certifications} />
        <Skills listOfSkills={userInfo.skills} />
        <Hobby hobbies={userInfo.hobbies} />
      </div>
      <Footer />
    </div>
  )
}

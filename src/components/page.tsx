import * as React from "react"
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
      <PersonalInfo
        name={userInfo.name}
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
      <Footer />
    </div>
  )
}

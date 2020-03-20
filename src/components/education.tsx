import * as React from "react"
import Section from "./common/section"
import SectionTitle from "./section_title"
import JobInfo from "./job_info/block"
import Education from "../models/education"

export default function WorkExperience(props: {educations: Education[]}): JSX.Element {
  let educationElements =
    props.educations.map(function(education) {
      return <JobInfo job={education} key={education.companyInfo.companyName} />
    })

  return (
    <Section>
      <div>
        <SectionTitle name={"Education"} />
        {educationElements}
      </div>
    </Section>
  )
}

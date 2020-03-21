import * as React from "react"
import PageSection from "./page_section"
import JobInfo from "./job_info/block"
import Education from "../models/education"

export default function WorkExperience(props: {educations: Education[]}): JSX.Element {
  let educationElements =
    props.educations.map(function(education) {
      return <JobInfo job={education} key={education.companyInfo.companyName} />
    })

  return (
    <PageSection title="Education">
      {educationElements}
    </PageSection>
  )
}

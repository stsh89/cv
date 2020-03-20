import * as React from "react"
import Section from "./common/section"
import SectionTitle from "./section_title"
import JobInfo from "./job_info/block"
import Job from "../models/job"

export default function WorkExperience(props: {jobs: Job[]}): JSX.Element {
  let jobElements =
    props.jobs.map(function(job) {
      return <JobInfo job={job} key={job.companyInfo.companyName} />
    })

  return (
    <Section>
      <div>
        <SectionTitle name={"Work Experience"} />
        {jobElements}
      </div>
    </Section>
  )
}

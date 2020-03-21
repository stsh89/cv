import * as React from "react"
import PageSection from "./page_section"
import JobInfo from "./job_info/block"
import Job from "../models/job"

export default function WorkExperience(props: {jobs: Job[]}): JSX.Element {
  let jobElements =
    props.jobs.map(function(job) {
      return <JobInfo job={job} key={job.companyInfo.companyName} />
    })

  return (
    <PageSection title="Work Experience">
      {jobElements}
    </PageSection>
  )
}

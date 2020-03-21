import * as React from "react"
import TimeFrame from "./time_frame"
import CompanyInfo from "./company_info"
import JobDescription from "./job_description"
import Job from "../../models/job"

export default function JobInfo(props: {job: Job, key: string}): JSX.Element {
  let descriptionElements =
    props.job.descriptions.map(function(description) {
      return <JobDescription kind={description.kind} text={description.text} key={description.kind} />
    })

  return (
    <div className="job-info">
      <TimeFrame from={props.job.timeFrame.from} to={props.job.timeFrame.to}/>
      <div className="job-descriptions">
        <CompanyInfo
          siteLink={props.job.companyInfo.siteLink}
          companyName={props.job.companyInfo.companyName}
          jobTitle={props.job.companyInfo.jobTitle}
        />
        {descriptionElements}
      </div>
    </div>
  )
}

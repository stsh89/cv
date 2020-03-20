import * as React from "react"

export default function CompanyInfo(props: {
  siteLink: string, companyName: string, jobTitle: string
}): JSX.Element {
  return (
    <div>
      <a href={props.siteLink} target="_blank">{props.siteLink}</a>, {props.companyName}, {props.jobTitle}
    </div>
  )
}

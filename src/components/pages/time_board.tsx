import * as React from "react"

export default function TimeBoard(props: {
  timeFrame: {from: string; to: string};
  companyInfo: {link: string; text: string};
  descriptions: {kind: string; text: string}[];
}): JSX.Element {
  const descriptions = props.descriptions.map((description, i) => {
    return <p key={i}>{description.kind}: {description.text}</p>
  })

  return (
    <div className="page-section__time-board">
      <div className="page-time-board__period">{props.timeFrame.from} - {props.timeFrame.to}</div>
      <div className="page-time-board__info">
        <a className="page-link" href="{props.companyInfo.link}">{props.companyInfo.link}</a>, {props.companyInfo.text}
      </div>
      <div className="page-time-board__text">
        {descriptions}
      </div>
    </div>
  )
}

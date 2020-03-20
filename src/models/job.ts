import TimeFrame from "./time_frame"
import CompanyInfo from "./company_info"
import Description from "./description"

export default class Job {
  timeFrame: TimeFrame;
  companyInfo: CompanyInfo;
  descriptions: Description[];

  constructor(
    timeFrame: TimeFrame,
    companyInfo: CompanyInfo,
    descriptions: Description[]
  ) {
    this.timeFrame = timeFrame
    this.companyInfo = companyInfo
    this.descriptions = descriptions
  }
}

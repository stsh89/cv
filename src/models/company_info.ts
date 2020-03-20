export default class CompanyInfo {
  siteLink: string;
  companyName: string;
  jobTitle?: string;

  constructor(siteLink: string, companyName: string, jobTitle: string) {
    this.siteLink = siteLink
    this.companyName = companyName
    this.jobTitle = jobTitle
  }
}

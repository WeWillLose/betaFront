import { EReportStatus } from 'src/model/report/ReportStatus';
import { IUser } from 'src/model/user/User';

interface IReport {
  id?: number | null
  data?: {
    tables?:Record<string,unknown>,
    META?:Record<string,unknown>,
    computed?:Record<string,unknown>,
  } | null
  status?: EReportStatus | null
  author?: IUser | null
  reportName?: string | null
  createdDate?: Date | null
  createdBy?: string | null
}

class Report implements IReport {
   author?: IUser | null;
   data?: {
     tables?:Record<string,unknown>,
     META?:Record<string,unknown>,
     computed?:Record<string,unknown>,
   } | null
   id?: number | null;
   reportName?: string | null;
   status?: EReportStatus | null;
   createdDate?: Date | null;
   createdBy?: string | null;



  constructor(author?: IUser | null,
              data?:{
                tables?:Record<string,unknown>,
                META?:Record<string,unknown>,
                computed?:Record<string,unknown>,
              } | null, id?: number | null, reportName?: string | null, status?: EReportStatus | null,
              createdDate?: Date | null, createdBy?: string | null) {
    this.author = author || {};
    this.data = data || {};
    this.id = id;
    this.reportName = reportName;
    this.status = status;
    this.createdDate = createdDate;
    this.createdBy = createdBy;
  }

}

export { IReport, Report };

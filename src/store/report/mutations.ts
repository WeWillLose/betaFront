import { MutationTree } from 'vuex';
import { ReportStateInterface } from 'src/store/report/state';
import { IReport } from 'src/model/report/Report';
import {cloneDeep} from 'lodash'

const mutation: MutationTree<ReportStateInterface> = {
  setState: (state: ReportStateInterface, data: ReportStateInterface) => {
    state = cloneDeep(data);
  },
  setReports: (state: ReportStateInterface, reports: IReport[]) => {
    state.reports = cloneDeep(reports);
  },
  setReport: (state: ReportStateInterface, report: IReport) => {
    state.report = cloneDeep(report);
  },
  setFollowersReport: (state: ReportStateInterface, reports: IReport[]) => {
    state.followerReports = cloneDeep(reports);
  },
  updateFollowerReportById(state: ReportStateInterface, report: IReport){
    const ind = state.followerReports.findIndex(item => item.id == report.id)
    ind!=-1 && state.followerReports.splice(ind, 1, cloneDeep(report))
  },

};
export default mutation;

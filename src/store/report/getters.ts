import {GetterTree} from 'vuex';
import {ReportStateInterface} from './state';
import {StateInterface} from '../index';
import { EReportStatus } from 'src/model/report/ReportStatus';
import userUtils from 'src/utils/user/user';
import { IReport, Report } from 'src/model/report/Report';

const getters: GetterTree<ReportStateInterface, StateInterface> = {
  getState: state => state,
  getReports:state => state.reports,
  getReport:state => state.report,
  getFollowerReports:state => state.followerReports,
  getColumns:state => state.columns,
  getColorByStatus:state =>(status:EReportStatus) =>state.statusColor[status],
  getEditedFollowerReport:state =>state.editedFollowerReport,
  getDataWithoutComputed: state => {
    const res:IReport = new Report()
    res['data'] = {}
    res['data']['META'] = {}
    res['data']['tables'] = {}
    res['data']['computed'] = {}
    for (const t in state){
      try {
        if (t == 'meta') {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          res['data']['META']['firstName']= state[t]?.firstName as string
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          res['data']['META']['lastName'] = state[t]?.lastName as string
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          res['data']['META']['year1'] = state[t]?.year1 as number
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          res['data']['META']['year2'] = state[t]?.year2 as number
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          res['data']['META']['quarter'] = state[t]?.quarter as number
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          res['data']['META']['middleName'] = state[t]?.middleName as string
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          res.id = state[t]?.id as number
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          res.reportName = state[t]?.reportName as string
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          res['data']['META']['fio'] = userUtils.getFio({ firstName: state[t]?.firstName as string || '', lastName: state[t]?.lastName as string || '', middleName:state[t]?.middleName as string || '',
          })
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          res['data']['META']['fioShort'] = userUtils.getShortFio({ firstName: state[t]?.firstName as string || '', lastName: state[t]?.lastName as string || '', middleName:state[t]?.middleName  as string || '', })
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        } else res['data']['tables'][t] = state[t]?.rows || [] as Record<string, unknown>[]
      } catch (e) {
        console.error(e)
      }
    }
    return res
  },
};

export default getters;

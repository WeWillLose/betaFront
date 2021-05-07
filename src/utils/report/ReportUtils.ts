import { EReportStatus } from 'src/model/report/ReportStatus';
import { IReport } from 'src/model/report/Report';
import store from 'src/store';

import { ErrorImpl } from 'src/model/error/Error';

type Named<T> = {
  [K in keyof T]: {
    readonly name: string;
  }
}[keyof T]

export interface IReportUtils {
  getNamedArray<T>(): Named<T>[]
}

export class ReportUtils implements IReportUtils {
  getNamedArray<EReportStatus>(separatorRegex = /_/g): Named<EReportStatus>[] {
    return (Object.keys(EReportStatus) as Array<keyof EReportStatus>)
      .map(key => ({
        name: String(key).replace(separatorRegex, ' ')
      }));
  }

  collectDataToReport(): IReport {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const result: IReport = store.getters['report/getDataWithoutComputed'] as IReport;
    if (!result['data']) throw new ErrorImpl('IN collectDataToReport result[\'data\'] is null', result);
    result['data']['computed'] = {};
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    result['data']['computed']['sum1'] = (store.getters['report/comment/getScore'] as number) + (store.getters['report/creation/getScore'] as number) + (store.getters['report/proective/getScore'] as number);
    store.commit('report/meta/setSum1', result['data']['computed']['sum1']);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/restrict-plus-operands
    result['data']['computed']['sum2'] = store.getters['report/class_rooms/getScore'] + store.getters['report/complex/getScore'] + store.getters['report/education/getScore'] + store.getters['report/programs/getScore'] + store.getters['report/reconstruction/getScore'] + store.getters['report/sdo/getScore'] + store.getters['report/teachingaids/getScore'] + store.getters['report/working_program/getScore'] + store.getters['report/circle/getScore'] + store.getters['report/events/getScore'] + store.getters['report/institutions/getScore'] + store.getters['report/plan/getScore'] + store.getters['report/activity/getScore'] + store.getters['report/coolhours/getScore'] + store.getters['report/obz/getScore'] + store.getters['report/plan_group/getScore'] + store.getters['report/contest/getScore'] + store.getters['report/participation/getScore'] + store.getters['report/qualification/getScore'] + store.getters['report/selfeducation/getScore'] + store.getters['report/seminars/getScore'] + store.getters['report/technologies/getScore'] + store.getters['report/experience/getScore'] + store.getters['report/interaction/getScore'] + store.getters['report/subject/getScore'] + store.getters['report/manual/getScore'];
    store.commit('report/meta/setSum2', result['data']['computed']['sum2']);
    return result;
  }

  setDefaultReportTablesData() {
    store.commit('report/meta/setDefaultState')
    store.commit('report/setReport',null)
    for (const name of store.state.report.table_names) {
      try {
        store.commit(`report/${name}/setDefaultRows`);
      } catch (e) {
        console.error(e);
      }
    }
  }

  setTablesData(report: IReport) {
    if (!report) {
      throw new ErrorImpl('IN setTablesData report is null')
    }
    if (report.id != null) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      store.state.report.meta.id = report.id;
    }
    if (report.reportName != null) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      store.state.report.meta.reportName = report.reportName;
    }
    const tablesData = report.data;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    for (const metaKey in store.state.report.meta) {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (tablesData['META'][metaKey] != null) {
          if (metaKey == 'year1') {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            store.state.report.meta.year1 = tablesData['META'][metaKey];
          } else if (metaKey == 'year2') {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            store.state.report.meta.year2 = tablesData['META'][metaKey];
          } else if (metaKey == 'quarter') {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            store.state.report.meta.quarter = tablesData['META'][metaKey];
          } else if (metaKey == 'firstName') {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            store.state.report.meta.firstName = tablesData['META'][metaKey];
          } else if (metaKey == 'lastName') {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            store.state.report.meta.lastName = tablesData['META'][metaKey];
          } else if (metaKey == 'middleName') {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            store.state.report.meta.middleName = tablesData['META'][metaKey];
          }
        }
      } catch (e) {
        console.error(e);
      }
    }
    for (const stateKey in store.state.report) {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (tablesData['tables'][stateKey] != null) {
          if (stateKey in store.state.report) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/ban-ts-comment
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            store.state.report[`${stateKey}`].rows = tablesData['tables'][stateKey];
          }
        }
      } catch (e) {
        console.error(e);
      }
    }
  }
}

const reportUtils = new ReportUtils();

export default reportUtils;


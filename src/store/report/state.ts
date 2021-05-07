import { IReport, Report } from 'src/model/report/Report';
import { EReportStatus } from 'src/model/report/ReportStatus';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import lodash from 'lodash'
export interface ReportStateInterface {
  tablesState: Record<string, Record<string, boolean>>
  reports: IReport[],
  report: IReport | null,
  columns: Record<string, unknown>[],
  followerReports: IReport[],
  statusColor: Record<EReportStatus, string>
  editedFollowerReport: IReport,
  defaultReport: IReport,
  table_names: string[]
}
const default_report = new Report()
function state(): ReportStateInterface {
  return {
    statusColor: {[EReportStatus.CHECKED]: 'green', [EReportStatus.COMPLETED]:'blue',[EReportStatus.UNCHECKED]:'red'},
    reports: [],
    report:null,
    editedFollowerReport: lodash.cloneDeep(default_report),
    defaultReport: lodash.cloneDeep(default_report),
    table_names : ['comment', 'progress_exam', 'progress', 'creation', 'proective', 'class_rooms', 'complex', 'education', 'programs', 'reconstruction', 'sdo', 'teachingaids', 'working_program', 'circle', 'events', 'institutions', 'plan', 'activity', 'coolhours', 'obz', 'plan_group', 'contest', 'participation', 'qualification', 'selfeducation', 'seminars', 'technologies', 'experience', 'interaction', 'subject', 'manual'],
    followerReports: [],
    tablesState: {
      meta: {
        error: false,
        done: false
      },
      comment: {
        error: false,
        done: false
      },
      progress_exam: {
        error: false,
        done: false
      },
      progress: {
        error: false,
        done: false
      },
      creation: {
        error: false,
        done: false
      },
      proective: {
        error: false,
        done: false
      },
      class_rooms: {
        error: false,
        done: false
      },
      complex: {
        error: false,
        done: false
      },
      education: {
        error: false,
        done: false
      },
      programs: {
        error: false,
        done: false
      },
      reconstruction: {
        error: false,
        done: false
      },
      sdo: {
        error: false,
        done: false
      },
      teachingaids: {
        error: false,
        done: false
      },
      working_program: {
        error: false,
        done: false
      },
      circle: {
        error: false,
        done: false
      },
      events: {
        error: false,
        done: false
      },
      institutions: {
        error: false,
        done: false
      },
      plan: {
        error: false,
        done: false
      },
      activity: {
        error: false,
        done: false
      },
      coolhours: {
        error: false,
        done: false
      },
      obz: {
        error: false,
        done: false
      },
      plan_group: {
        error: false,
        done: false
      },
      contest: {
        error: false,
        done: false
      },
      participation: {
        error: false,
        done: false
      },
      qualification: {
        error: false,
        done: false
      },
      selfeducation: {
        error: false,
        done: false
      },
      seminars: {
        error: false,
        done: false
      },
      technologies: {
        error: false,
        done: false
      },
      experience: {
        error: false,
        done: false
      },
      interaction: {
        error: false,
        done: false
      },
      subject: {
        error: false,
        done: false
      },
      manual: {
        error: false,
        done: false
      }
    },
    columns: [
      // {name: 'id', label: 'Id', field: 'id'},
      {name: 'reportName', label: 'Название', field: 'reportName',align: 'center',sortable:true},
      {name: 'author', label: 'Автор', field: 'author',align: 'center',sortable:true},
      {name: 'status', label: 'Статус', field: 'status',align: 'center',sortable:true},
      {name: 'createdDate', label: 'Дата создания', field: 'createdDate',align: 'center',sortable:true}
    ]
  };
}

export default state;

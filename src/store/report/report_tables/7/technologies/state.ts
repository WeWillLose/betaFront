import {ReportTableStateInterface} from 'src/store/report/types';

function state(): ReportTableStateInterface {
  return {
    name:'technologies',
    editedIndex: -1,
    editedItem: {
      name: '',
      application: '',
      score: 0,
    },
    defaultItem: {
      name: '',
      application: '',
      score: 0,
    },
    columns: [
      {
        name: 'name',
        label: 'Название технологии',
        align: 'center',
        field:'name'
      },
      {
        name: 'application',
        label: 'Практическое применение',
        align: 'center',
        field:'application'
      },
      {
        name: 'score',
        align: 'center',
        label: 'Баллы',
        field: 'score',
        style: 'width:100px'
      },
      {
        name: 'actions',
        label: 'Действия',
        field: 'actions',
        align: 'center',
      }
    ],
    rows: [],
    defaultRows: [],
    maxScore: 1
  }
}

export default state;

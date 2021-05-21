import {ReportTableStateInterface} from 'src/store/report/types';

function state(): ReportTableStateInterface {
  return {
    name:'coolhours',
    editedIndex: -1,
    editedItem: {
      theme: '',
      thoroughness: '',
      score: 0,
    },
    defaultItem: {
      theme: '',
      thoroughness: '',
      score: 0,
    },
    columns: [
      {
        name: 'theme',
        label: 'Темы классных часов',
        align: 'center',
        field:'theme'
      },
      {
        name: 'thoroughness',
        label: 'Проработанность (информационная папка, сценарий, презентация)',
        align: 'center',
        field:'thoroughness'
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

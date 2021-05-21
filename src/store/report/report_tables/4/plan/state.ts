import {ReportTableStateInterface} from 'src/store/report/types';

function state(): ReportTableStateInterface {
  return {
    name:'plan',
    editedIndex: -1,
    editedItem: {
      level: '',
      score: 0,
    },
    defaultItem: {
      level: '',
      score: 0,
    },
    columns: [
      {
        name: 'level',
        label: 'Уровень проработанности документа, концепции воспитательной работы',
        align: 'center',
        field:'level'
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
    maxScore: 0.5
  }
}

export default state;

import {ReportTableStateInterface} from 'src/store/report/types';

function state(): ReportTableStateInterface {
  return {
    name:'subject',
    editedIndex: -1,
    editedItem: {
      name: '',
      score: 0,
    },
    defaultItem: {
      name: '',
      score: 0,
    },
    columns: [
      {
        name: 'name',
        label: 'Ведение нормативной документации, посещение заседаний, собраний, обеспечение участия студентов в мероприятиях, своевременность планирования и отчётности',
        align: 'left',
        field:'name'
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
    rows: [
      {
        name: '',
        score: 0,
      }
    ],
    defaultRows: [
      {
        name: '',
        score: 0,
      }
    ],
    maxScore: 1
  }
}

export default state;

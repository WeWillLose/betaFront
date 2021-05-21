import {ReportTableStateInterface} from 'src/store/report/types';

function state(): ReportTableStateInterface {
  return {
    name:'comment',
    editedIndex: -1,

    editedItem: {
      comment: '',
      score: 0,
    },
    defaultItem: {
      comment: '',
      score: 0,
    },
    columns: [
      {
        name: 'comment',
        required: true,
        label: 'Коментарии',
        align: 'left',
        field:'comment'
      },
      {
        name: 'score',
        align: 'center',
        label: 'Баллы',
        field: 'score',
        style: 'width:150px'
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
        comment: '',
        score: 0,
      }
    ],
    defaultRows: [
      {
        comment: '',
        score: 0,
      }
    ],
    maxScore: 8
  }
}

export default state;

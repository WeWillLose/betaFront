import {ReportTableStateInterface} from 'src/store/report/types';

function state(): ReportTableStateInterface {
  return {
    name:'manual',
    editedIndex: -1,
    editedItem: {
      quantity: '',
      score: 0,
    },
    defaultItem: {
      quantity: '',
      score: 0,
    },
    columns: [
      {
        name: 'quantity',
        label: 'Количество проводимых мероприятий, качество документации, отзывы членов МО.',
        align: 'center',
        field:'quantity'
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
        quantity: '',
        score: 0,
      }
    ],
    defaultRows: [
      {
        quantity: '',
        score: 0,
      }
    ],
    maxScore: 20
  }
}

export default state;

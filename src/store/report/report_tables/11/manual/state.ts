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
        align: 'left',
        field:'quantity'
      },
      {
        name: 'score',
        align: 'center',
        label: 'Баллы',
        field: 'score',
        style: 'width:100px'
      },
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
    ]
  }
}

export default state;

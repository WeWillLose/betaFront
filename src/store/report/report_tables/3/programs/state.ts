import {ReportTableStateInterface} from 'src/store/report/types';

function state(): ReportTableStateInterface {
  return {
    name:'programs',
    editedIndex: -1,
    editedItem: {
      title: '',
      quantity: 0,
      score: 0,
    },
    defaultItem: {
      title: '',
      quantity: 0,
      score: 0,
    },
    columns: [
      {
        name: 'title',
        label: 'Название',
        align: 'center',
        field:'title'
      },
      {
        name: 'quantity',
        align: 'center',
        label: 'Количество',
        field: 'quantity',
        style: 'width:100px'
      },
      {
        name: 'score',
        required: true,
        align: 'center',
        label: 'Баллы',
        field: 'score',
        style: 'width:100px'
      },
      {
        name: 'actions',
        label: 'Actions',
        field: 'actions',
        align: 'center',
      },
    ],
    rows: [
      {

      }
    ],
    defaultRows: [

    ]
  }
}

export default state;

import {ReportTableStateInterface} from 'src/store/report/types';

function state(): ReportTableStateInterface {
  return {
    name: 'class_rooms',
    editedIndex: -1,
    editedItem: {
      class: '',
      status: '',
      score: 0,
    },
    defaultItem: {
      class: '',
      status: '',
      score: 0,
    },
    columns: [
      {
        name: 'class',
        required: true,
        label: '№ кабинета/лаборатории',
        align: 'left',
        field: 'class',
        style: 'width:50px',
      },
      {
        name: 'status',
        required: true,
        align: 'center',
        label: 'Характеристика состояния',
        field: 'status',
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

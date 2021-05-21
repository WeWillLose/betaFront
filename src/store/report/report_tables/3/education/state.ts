import {ReportTableStateInterface} from 'src/store/report/types';

function state(): ReportTableStateInterface {
  return {
    name:'education',
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
        label: 'Наименование методической работы',
        align: 'center',
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
    rows: [],
    defaultRows: [],
    maxScore: 3
  }
}

export default state;

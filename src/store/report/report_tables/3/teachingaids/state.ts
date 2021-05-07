import {ReportTableStateInterface} from 'src/store/report/types';

function state(): ReportTableStateInterface {
  return {
    name:'teachingaids',
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
        label: 'Наименование пособия',
        align: 'center',
        field:'name'
      },
      {
        name: 'score',
        align: 'center',
        label: 'Баллы',
        field: 'score',
        style: 'width:50px'
      },
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
    ]
  }
}

export default state;

import {ReportTableStateInterface} from 'src/store/report/types';

function state(): ReportTableStateInterface {
  return {
    name:'institutions',
    editedIndex: -1,
    editedItem: {
      institutions: '',
      students: '',
      score: 0,
    },
    defaultItem: {
      institutions: '',
      students: '',
      score: 0,
    },
    columns: [
      {
        name: 'institutions',
        label: 'Культурные, научные, производственные и др. учреждения, города, других городов',
        align: 'center',
        field:'institutions'
      },
      {
        name: 'students',
        label: 'Количество студентов',
        align: 'center',
        field:'students'
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
        institutions: '',
        students: '',
        score: 0,
      }
    ],
    defaultRows: [
      {
        institutions: '',
        students: '',
        score: 0,
      }
    ]
  }
}

export default state;

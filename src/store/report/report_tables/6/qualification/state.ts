import {ReportTableStateInterface} from 'src/store/report/types';

function state(): ReportTableStateInterface {
  return {
    name:'qualification',
    editedIndex: -1,
    editedItem: {
      qualification: '',
      date: '',
      score: 0,
    },
    defaultItem: {
      qualification: '',
      date: '',
      score: 0,
    },
    columns: [
      {
        name: 'qualification',
        label: 'Прохождение курсов повышения квалификации, стажировки',
        align: 'center',
        field:'qualification'
      },
      {
        name: 'date',
        label: 'Дата прохождения',
        align: 'center',
        field:'date'
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
        qualification: 'Курсы:',
        date: '',
        score: 0,
      },
      {
        qualification: 'Стажировка:',
        date: '',
        score: 0,
      },
    ],
    defaultRows: [
      {
        qualification: 'Курсы:',
        date: '',
        score: 0,
      },
      {
        qualification: 'Стажировка:',
        date: '',
        score: 0,
      },
    ]
  }
}

export default state;

import {ReportTableStateInterface} from 'src/store/report/types';

function state(): ReportTableStateInterface {
  return {
    name:'contest',
    editedIndex: -1,
    editedItem: {
      name: '',
      level: '',
      result: '',
      score: 0,
    },
    defaultItem: {
      name: '',
      level: '',
      result: '',
      score: 0,
    },
    columns: [
      {
        name: 'name',
        label: 'Название конкурса, конференции, проекта',
        align: 'center',
        field: 'name'
      },
      {
        name: 'level',
        label: 'Уровень',
        align: 'center',
        field:'level'
      },
      {
        name: 'result',
        label: 'Результат',
        align: 'center',
        field:'result'
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

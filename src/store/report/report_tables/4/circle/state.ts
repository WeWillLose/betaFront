import {ReportTableStateInterface} from 'src/store/report/types';

function state(): ReportTableStateInterface {
  return {
    name:'circle',
    editedIndex: -1,
    editedItem: {
      group: '',
      students: '',
      lessons: '',
      score: 0,
    },
    defaultItem: {
      group: '',
      students: '',
      lessons: '',
      score: 0,
    },
    columns: [
      {
        name: 'group',
        label: 'Предметный кружок (клуб, секция, студия)',
        align: 'center',
        field:'group'
      },
      {
        name: 'students',
        label: 'Количество студентов',
        align: 'center',
        field:'students'
      },
      {
        name: 'lessons',
        label: 'Количество занятий',
        align: 'center',
        field:'lessons'
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

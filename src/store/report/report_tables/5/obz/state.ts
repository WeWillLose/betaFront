import {ReportTableStateInterface} from 'src/store/report/types';

function state(): ReportTableStateInterface {
  return {
    name:'obz',
    editedIndex: -1,
    editedItem: {
      role: '',
      score: 0,
    },
    defaultItem: {
      role: '',
      score: 0,
    },
    columns: [
      {
        name: 'role',
        label: 'Роль преподавателя в сопровождении обучающихся в учебном процессе и внеклассной работе',
        align: 'center',
        field: 'role'
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

      }
    ],
    defaultRows: [

    ]
  }
}

export default state;

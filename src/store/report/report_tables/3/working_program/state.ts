import {ReportTableStateInterface} from 'src/store/report/types';

function state(): ReportTableStateInterface {
  return {
    name:'working_program',
    editedIndex: -1,
    editedItem: {
      name: '',

    },
    defaultItem: {
      name: '',
    },
    columns: [
      {
        name: 'name',
        label: 'Название рабочей программы',
        align: 'center',
        field:'name'
      },
      {
        name: 'actions',
        label: 'Действия',
        field: 'actions',
        align: 'center',
      }
    ],
    rows: [
      {
        name: '',
      }
    ],
    defaultRows: [
      {
        name: '',
      }
    ],
    maxScore: 0
  }
}

export default state;

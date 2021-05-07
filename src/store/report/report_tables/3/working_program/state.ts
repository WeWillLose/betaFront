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
    ],
    rows: [
      {
        name: '',
      }
    ],
    defaultRows: [

    ]
  }
}

export default state;

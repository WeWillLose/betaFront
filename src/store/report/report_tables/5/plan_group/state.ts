import {ReportTableStateInterface} from 'src/store/report/types';

function state(): ReportTableStateInterface {
  return {
    name: 'plan_group',
    editedIndex: -1,
    editedItem: {
      presence: '',
    },
    defaultItem: {
      presence: '',
    },
    columns: [
      {
        name: 'presence',
        label: 'Наличие плана воспитательной работы с группой',
        align: 'center',
        field: 'presence'
      },
      {
        name: 'actions',
        label: 'Действия',
        field: 'actions',
        align: 'center',
      }
    ],
    rows: [{
      presence: '',
    }
    ],
    defaultRows: [
      {
        presence: '',
      }
    ],
    maxScore: 0
  }
}

export default state;

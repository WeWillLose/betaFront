import {ReportTableStateInterface} from 'src/store/report/types';

function state(): ReportTableStateInterface {
  return {
    name:'events',
    editedIndex: -1,
    editedItem: {
      name: '',
      Role: '',
      score: 0,
    },
    defaultItem: {
      name: '',
      Role: '',
      score: 0,
    },
    columns: [
      {
        name: 'name',
        label: 'Название мероприятия',
        align: 'center',
        field:'name'
      },
      {
        name: 'role',
        label: 'Роль преподавателя (помощь в организации, подготовка фрагмента мероприятия, организация мероприятия в целом)',
        align: 'center',
        field:'Role'
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
        label: 'Actions',
        field: 'actions',
        align: 'center',
      }
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

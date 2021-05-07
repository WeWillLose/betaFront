import {ReportTableStateInterface} from 'src/store/report/types';

function state(): ReportTableStateInterface {
  return {
    name:'progress_exam',
    editedIndex:-1,
    editedItem:{
      group: '',
      subject: '',
      amount: 0,
      mark5: 0,
      mark4: 0,
      mark3: 0,
      mark2: 0,
      progress: 0,
      quality: 0,
      unsuccs: '',
    },
    defaultItem: {
      group: '',
      subject: '',
      amount: 0,
      mark5: 0,
      mark4: 0,
      mark3: 0,
      mark2: 0,
      progress: 0,
      quality: 0,
      unsuccs: '',
    },
    columns: [
      {
        name: 'group',
        required: true,
        label: 'Группа',
        align: 'left',
        field:'group'
      },
      {
        name: 'subject',
        align: 'center',
        label: 'Дисциплина',
        field: 'subject',
        style:'width:200px'
      },
      {
        name: 'amount',
        align: 'center',
        label: 'Кол-во студентов',
        field: 'amount',

      },
      { name: 'mark5', label: 'Кол-во оценок 5', field: 'mark5', align: 'center',},
      { name: 'mark4', label: 'Кол-во оценок 4', field: 'mark4', align: 'center',},
      { name: 'mark3', label: 'Кол-во оценок 3', field: 'mark3', align: 'center',},
      { name: 'mark2', label: 'Кол-во оценок 2', field: 'mark2', align: 'center',},
      {
        name: 'progress',
        label: 'Успеваемость  (%)',
        field: 'progress',
        align: 'center',

      },
      {
        name: 'quality',
        label: 'Качество знаний  (%)',
        field: 'quality',
        align: 'center',
      },
      {
        name: 'unsuccs',
        label: 'Неуспевающие студенты',
        field: 'unsuccs',
        align: 'center',
      },
      {
        name: 'actions',
        label: 'Actions',
        field: 'actions',
        align: 'center',
      }
    ],
    rows: [
    ],
    defaultRows: [
    ]
  }
}

export default state;

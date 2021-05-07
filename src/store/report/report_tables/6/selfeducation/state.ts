import {ReportTableStateInterface} from 'src/store/report/types';

function state(): ReportTableStateInterface {
  return {
    name:'selfeducation',
    editedIndex: -1,
    editedItem: {
      selfeducation: '',
      justification: '',
      score: 0,
    },
    defaultItem: {
      selfeducation: '',
      justification: '',
      score: 0,
    },
    columns: [
      {
        name: 'selfeducation',
        label: 'Самообразование',
        align: 'center',
        field:'selfeducation'
      },
      {
        name: 'justification',
        label: 'Обоснование',
        align: 'center',
        field:'justification'
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
        selfeducation: 'Наличие протоколов посещения уроков, классных часов и открытых мероприятий',
        justification: '',
        score: 0,
      },
      {
        selfeducation: 'Наличие материалов работы с источниками',
        justification: '',
        score: 0,
      },
    ],
    defaultRows: [
      {
        selfeducation: 'Наличие протоколов посещения уроков, классных часов и открытых мероприятий',
        justification: '',
        score: 0,
      },
      {
        selfeducation: 'Наличие материалов работы с источниками',
        justification: '',
        score: 0,
      },
    ]
  }
}

export default state;

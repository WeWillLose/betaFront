import {ReportTableStateInterface} from 'src/store/report/types';

function state(): ReportTableStateInterface {
  return {
    name:'participation',
    editedIndex: -1,
    editedItem: {
      methodical: '',
      name: '',
      score: 0,
    },
    defaultItem: {
      methodical: '',
      name: '',
      score: 0,
    },
    columns: [
      {
        name: 'methodical',
        label: 'Вид работы',
        align: 'center',
        field: 'methodical'
      },
      {
        name: 'name',
        label: 'Название',
        align: 'center',
        field: 'name'
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
        methodical: 'Методическая тема',
        name: '',
        score: 0,
      },
      {
        methodical: 'Открытый урок',
        name: '',
        score: 0,
      },
      {
        methodical: 'Открытое внеурочное мероприятие',
        name: '',
        score: 0,
      },
      {
        methodical: 'Тематические выступления на заседании ЦК, педсовет',
        name: '',
        score: 0,
      },
    ],
    defaultRows: [
      {
        methodical: 'Методическая тема',
        name: '',
        score: 0,
      },
      {
        methodical: 'Открытый урок',
        name: '',
        score: 0,
      },
      {
        methodical: 'Открытое внеурочное мероприятие',
        name: '',
        score: 0,
      },
      {
        methodical: 'Тематические выступления на заседании ЦК, педсовет',
        name: '',
        score: 0,
      },
    ]
  }
}

export default state;

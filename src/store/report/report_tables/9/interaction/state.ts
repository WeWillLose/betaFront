import {ReportTableStateInterface} from 'src/store/report/types';

function state(): ReportTableStateInterface {
  return {
    name:'interaction',
    editedIndex: -1,
    editedItem: {
      type: '',
      perform: '',
      score: 0,
    },
    defaultItem: {
      type: '',
      perform: '',
      score: 0,
    },
    columns: [
      {
        name: 'type',
        label: 'Вид взаимодействия',
        align: 'center',
        field:'type'
      },
      {
        name: 'perform',
        label: 'Выполнение',
        align: 'center',
        field:'perform'
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
        type: 'Участие родителей и общественности в родительских собраниях',
        perform: '',
        score: 0,
      },
      {
        type: 'Привлечение родителей к различным видам деятельности, к управлению образовательным процессом',
        perform: '',
        score: 0,
      },
      {
        type: 'Использование возможностей различных организаций в реализации образовательных задач, осуществление наставничества',
        perform: '',
        score: 0,
      },
      {
        type: 'Общественная деятельность',
        perform: '',
        score: 0,
      },
      {
        type: 'Профориентационная работа',
        perform: '',
        score: 0,
      },
    ],
    defaultRows: [
      {
        type: 'Участие родителей и общественности в родительских собраниях',
        perform: '',
        score: 0,
      },
      {
        type: 'Привлечение родителей к различным видам деятельности, к управлению образовательным процессом',
        perform: '',
        score: 0,
      },
      {
        type: 'Использование возможностей различных организаций в реализации образовательных задач, осуществление наставничества',
        perform: '',
        score: 0,
      },
      {
        type: 'Общественная деятельность',
        perform: '',
        score: 0,
      },
      {
        type: 'Профориентационная работа',
        perform: '',
        score: 0,
      },
    ]
  }
}

export default state;

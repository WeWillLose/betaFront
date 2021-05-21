import {ReportTableStateInterface} from 'src/store/report/types';

function state(): ReportTableStateInterface {
  return {
    name: 'proective',
    editedIndex: -1,

    editedItem: {
      interesting: '',
      proof: '',
      score: 0,
    },
    defaultItem: {
      interesting: '',
      proof: '',
      score: 0,
    },
    columns: [
      {
        name: 'interesting',
        required: true,
        label: '2.2 Вовлечение студентов в проектную, исследовательскую работу ',
        align: 'left',
        field: 'interesting'
      },
      {
        name: 'proof',
        align: 'center',
        label: 'Обоснования',
        field: 'proof',
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
    rows: [
      {
        interesting: 'Учатсие обучающихся в конференциях',
        proof: '',
        score: 0,
      },
      {
        interesting: 'Участие обучающихся в проектах, в т.ч. ВКР',
        proof: '',
        score: 0,
      },
    ],
    defaultRows: [
      {
        interesting: 'Учатсие обучающихся в конференциях',
        proof: '',
        score: 0,
      },
      {
        interesting: 'Участие обучающихся в проектах, в т.ч. ВКР',
        proof: '',
        score: 0,
      },
    ],
    maxScore: 7
  }
}

export default state;

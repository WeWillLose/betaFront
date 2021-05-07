import {ReportTableStateInterface} from 'src/store/report/types';

function state(): ReportTableStateInterface {
  return {
    name: 'creation',
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
        label: '2.1 Вовлечение студентов в творческую работу',
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
        label: 'Actions',
        field: 'actions',
        align: 'center',
      }

    ],
    rows: [
      {
        interesting: 'Наличие обучающихся - участников предметных олимпиад, конкурсов, спортивных соревнований, смотров',
        proof: '',
        score: 0,
      },
      {
        interesting: 'Наличие обучающихся -  призёров предметных олимпиад, конкурсов, спортивных соревнований, смотров',
        proof: '',
        score: 0,
      },
    ],
    defaultRows: [
      {
        interesting: 'Наличие обучающихся - участников предметных олимпиад, конкурсов, спортивных соревнований, смотров',
        proof: '',
        score: 0,
      },
      {
        interesting: 'Наличие обучающихся -  призёров предметных олимпиад, конкурсов, спортивных соревнований, смотров',
        proof: '',
        score: 0,
      },
    ]
  }
}
export default state;

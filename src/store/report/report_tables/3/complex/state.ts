import {ReportTableStateInterface} from 'src/store/report/types';

function state(): ReportTableStateInterface {
  return {
    name:'complex',
    editedIndex: -1,
    editedItem: {
      typework: '',
      MDK: '',
      materials: '',
      score: 0,
    },
    defaultItem: {
      title: '',
      quantity: 0,
      score: 0,
    },
    columns: [
      {
        name: 'typework',
        label: 'Вид работ',
        align: 'center',
        field:'typework'
      },
      {
        name: 'MDK',
        align: 'center',
        label: 'УД, МДК',
        field: 'MDK',
      },
      {
        name: 'materials',
        align: 'center',
        label: 'Количество материалов',
        field: 'materials',
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
        typework: 'Теоретический материал',
        MDK: '',
        smaterials: '',
        score: 0,
      },
      {
        typework: 'Комплекты КОС, тесты',
        MDK: '',
        smaterials: '',
        score: 0,
      },
      {
        typework: 'Электронные презентаци',
        MDK: '',
        smaterials: '',
        score: 0,
      },
      {
        typework: 'Видеоматериалы',
        MDK: '',
        smaterials: '',
        score: 0,
      },
    ],
    defaultRows: [
      {
        typework: 'Теоретический материал',
        MDK: '',
        smaterials: '',
        score: 0,
      },
      {
        typework: 'Комплекты КОС, тесты',
        MDK: '',
        smaterials: '',
        score: 0,
      },
      {
        typework: 'Электронные презентаци',
        MDK: '',
        smaterials: '',
        score: 0,
      },
      {
        typework: 'Видеоматериалы',
        MDK: '',
        smaterials: '',
        score: 0,
      },
    ],
    maxScore: 1
  }
}

export default state;

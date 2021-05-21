import {ReportTableStateInterface} from 'src/store/report/types';

function state(): ReportTableStateInterface {
  return {
    name:'reconstruction',
    editedIndex: -1,
    editedItem: {
      reconstruction: '',
      score: 0,
    },
    defaultItem: {
      reconstruction: '',
      score: 0,
    },
    columns: [
      {
        name: 'reconstruction',
        label: 'Приобретено, создан стенд, разработан план реконструкции, проведена реконструкция',
        align: 'center',
        field:'reconstruction'
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
    rows: [],
    defaultRows: [],
    maxScore: 2
  }
}

export default state;

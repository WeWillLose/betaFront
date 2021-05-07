import { GetterTree } from 'vuex';

import { MetaStateInterface } from './state';
import {StateInterface} from 'src/store';
import userUtils from 'src/utils/user/user';

const getters: GetterTree<MetaStateInterface, StateInterface> = {
  getState(state: MetaStateInterface){
    return state;
  },
  getId(state: MetaStateInterface){
    return state.id;
  },
  getData: state =>{
    const dict:Record<string, unknown> = {}
    dict['firstName'] =state.firstName;
    dict['lastName'] =state.lastName;
    dict['middleName'] =state.middleName;
    dict['year1'] =state.year1;
    dict['year2'] =state.year2;
    dict['quarter'] =state.quarter;
    dict['fioShort'] = userUtils.getShortFio({'id':0,'roles': [], 'username': null,'lastName':state.lastName,'firstName':state.firstName,'middleName':state.middleName});
    dict['fio'] = userUtils.getFio({'id':0,'roles': [], 'username': null,'lastName':state.lastName,'firstName':state.firstName,'middleName':state.middleName});
    dict['sum1'] = state.sum1
    dict['sum2'] = state.sum2
    dict['reportName'] = state.reportName
    dict['id'] = state.id
    return dict
  },
  getFirstName: state => state.firstName,
  getLastName: state => state.lastName,
  getMiddleName: state => state.middleName,
  getQuarter: state => state.quarter,
  getYear1: state => state.year1,
  getYear2: state => state.year2,
  getSum1: state => state.sum1,
  getSum2: state => state.sum2,
  getReportName: state => state.reportName,
};

export default getters;

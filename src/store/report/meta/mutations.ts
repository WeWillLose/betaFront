import { MutationTree } from 'vuex';
import {defaultMetaState, MetaStateInterface} from './state';
import {cloneDeep} from 'lodash'
const mutation: MutationTree<MetaStateInterface> = {
  setState(state: MetaStateInterface,metaState: MetaStateInterface){
    state = metaState
  },
  setDefaultState(state: MetaStateInterface){
    for(const key of Object.keys(defaultMetaState)){
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      state[key]  = cloneDeep(defaultMetaState[key])
    }
  },
  setYear1(state: MetaStateInterface,year1: number){
    state.year1 = year1
  },
  setYear2(state: MetaStateInterface,year2: number){
    state.year2 = year2
  },
  setQuarter(state: MetaStateInterface,quarter: number){
    state.quarter = quarter
  },
  setLastName(state: MetaStateInterface,lastName: string){
    state.lastName = lastName
  },
  setFirstName(state: MetaStateInterface,firstName: string){
    state.firstName = firstName
  },
  setMiddleName(state: MetaStateInterface,middleName: string){
    state.middleName = middleName
  },
  setReportName(state: MetaStateInterface,reportName: string){
    state.reportName = reportName
  },
  setSum1(state: MetaStateInterface,sum1: number){
    state.sum1 = sum1
  },
  setSum2(state: MetaStateInterface,sum2: number){
    state.sum2 = sum2
  },
  setProcent1(state: MetaStateInterface,procent1: number){
    state.procent1 = procent1
  },
  setProcent2(state: MetaStateInterface,procent2: number){
    state.procent2 = procent2
  },
  setTotal(state: MetaStateInterface,total: number){
    state.total  = total
  },

};

export default mutation;

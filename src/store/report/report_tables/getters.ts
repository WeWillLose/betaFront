import { GetterTree } from 'vuex';
import { StateInterface } from 'src/store';
import {ReportTableStateInterface} from '../types';


const getters: GetterTree<ReportTableStateInterface, StateInterface> = {
  getRows: state => {
    return state.rows
  },
  getColumns: state => {
    return state.columns
  },
  getDefaultItem: state=>{
    return state.defaultItem
  },
  getEditedIndex: state=>{
    return state.editedIndex
  },
  getEditedItem: state=>{
    return state.editedItem
  },
  getData: state =>{
    const dict:Record<string,unknown> = {}
    dict[state.name] = state.rows
    return dict
  },
  getScore(state):number{
    let scoreRate = 0;
    try{
      if(!state.rows){
        return scoreRate;
      }
      state.rows.forEach(t=>{
        if(!!t.score){
          try{
            scoreRate+= Number.parseFloat(String(t.score));
          }catch (e) {
          }
        }
      })
    }catch (e) {
      console.error(e)
    }

    return scoreRate
  }
};

export default getters;

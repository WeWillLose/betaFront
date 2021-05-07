import {MutationTree} from 'vuex';
import {ReportTableStateInterface} from '../types';
import {cloneDeep} from 'lodash'

const mutation: MutationTree<ReportTableStateInterface> = {
  addRow: (state: ReportTableStateInterface,item:Record<string, unknown>) => {
    if(!item){
      console.warn('IN addRow item is null')
    }else state.rows.push(item);
  },
  setRows: (state: ReportTableStateInterface, rows: Record<string, unknown>) => {
    if (!rows) {
      state.rows = Object.assign([], []);
    } else {
      state.rows = Object.assign([], rows);
    }
  },
  deleteItem: (state: ReportTableStateInterface, item: Record<string, unknown>) => {
    const index = state.rows.indexOf(item);
    if (index > -1)
      state.rows.splice(index, 1);
    else console.warn(`item: ${item.toString()} not found in ${state.rows.toString()}`)
  },
  editItem: (state: ReportTableStateInterface, item: Record<string, unknown>) => {
    if (state.editedIndex > -1)
      state.rows.splice(state.editedIndex,1,item)
    else console.warn(`item: ${item.toString()} not found in ${state.rows.toString()}`)
  },
  setDefaultEditedItem: (state) => {
    state.editedItem = Object.assign({}, state.defaultItem)
    state.editedIndex = -1
  },
  setEditedItem: (state,item:Record<string, unknown>) => {
    state.editedIndex = state.rows.indexOf(item)
    if(state.editedIndex == -1) console.warn(`In setEditedItem editedIndex: ${state.editedIndex}`)
    state.editedItem = cloneDeep(item)
  },
  setDefaultRows(state):void{
    state.rows = cloneDeep(state.defaultRows)
  }
};

export default mutation;

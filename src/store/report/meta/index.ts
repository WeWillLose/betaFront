import { Module } from 'vuex';

import state, { MetaStateInterface } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import {StateInterface} from 'src/store';

const exampleModule: Module<MetaStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
};

export default exampleModule;

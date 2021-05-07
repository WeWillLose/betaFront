import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { HeaderStateInterface } from './state';

const getters: GetterTree<HeaderStateInterface, StateInterface> = {
  getIsLeftDrawerOpen ( context ) {
    return context.isLeftDrawerOpen;
  },
};

export default getters;

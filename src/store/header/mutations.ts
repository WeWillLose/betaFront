import { MutationTree } from 'vuex';
import { HeaderStateInterface } from './state';

const mutation: MutationTree<HeaderStateInterface> = {
  setIsLeftDrawerOpen (state: HeaderStateInterface, isOpen: boolean ) {
    state.isLeftDrawerOpen = isOpen;
  },
  invertIsOpen ( state: HeaderStateInterface) {
    state.isLeftDrawerOpen = !state.isLeftDrawerOpen;
  },
};

export default mutation;

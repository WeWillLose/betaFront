import { MutationTree } from 'vuex';
import { UserStateInterface } from './state';
import { IUser } from 'src/model/user/User';
import {cloneDeep} from 'lodash'

const mutation: MutationTree<UserStateInterface> = {
  setUser(state: UserStateInterface,user:IUser | null){
    state.user = cloneDeep(user);
  },
  setUsers(state: UserStateInterface,users:IUser[]){
    state.users = cloneDeep(users);
  },
  addUsersUser(state: UserStateInterface,users:IUser){
    state.users.push(cloneDeep(users));
  },
  updateUsersUser(state: UserStateInterface, user:IUser){
    const ind = state.users.findIndex(item => item.id == user.id)
    ind!=-1 && state.users.splice(ind, 1, cloneDeep(user))
  },
};

export default mutation;

import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { UserStateInterface } from './state';
import userUtils from 'src/utils/user/user';
import { IUser } from 'src/model/user/User';
import {cloneDeep} from 'lodash'


const getters: GetterTree<UserStateInterface, StateInterface> = {
  getIsLoggedIn ( context ):boolean {
    return userUtils.isLoggedIn( context.user );
  },
  getUser(context){
    return context.user
  },
  getIsAdmin ( context ):boolean {
    if(!context.user) return false;
    return userUtils.isAdmin(context.user);
  },
  getIsChairman ( context ):boolean {
    if(!context.user) return false;
    return userUtils.isChairman(context.user);
  },
  getUsername(context):string{
    return context.user?.username || '';
  },
  getShortFio(context):string{
    return userUtils.getShortFio(context.user);
  },
  getUsers(context):IUser[]{
    return cloneDeep(context.users);
  },
  getColumns(context):Record<string, unknown>[]{
    return cloneDeep(context.columns);
  },
  getRoleOptions():Record<string, unknown>[]{
    return userUtils.rolesEnumToNamedArray().filter(t=>t.name!='ADMIN');
  },
  getChairmans(context):IUser[]{
    return cloneDeep(context.users.filter(u=>userUtils.isChairman(u)));
  },

};

export default getters;

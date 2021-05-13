import {ActionTree} from 'vuex';
import {StateInterface} from '../index';
import {UserStateInterface} from './state';
import { IUser, IUserLogin } from 'src/model/user/User';
import { restApi } from 'boot/axios';
import { ErrorImpl } from 'src/model/error/Error';
import userUtils from 'src/utils/user/user';


const actions: ActionTree<UserStateInterface, StateInterface> = {
  async createUser(context,user:IUser){
    try{
      const res = await restApi.registrationUser(userUtils.capitalizeUserFio(user));
      context.commit('addUsersUser',res.data);
      return true;
    }catch (e) {
      console.error(e)
      return false;
    }
  },
  async login(context,user:IUserLogin){
    try{
      const res = await restApi.login(user);
      context.commit('setUser',res.data);
      return true;
    }catch (e) {
      console.error(e)
      return false;
    }
  },
  // eslint-disable-next-line @typescript-eslint/require-await
  async logout(context){
    try{
      context.commit('setUser',null);
      return true;
    }catch (e) {
      console.error(e)
      return false;
    }
  },
  async getUsers(context){
    try{
      const res = await restApi.getUsers()
      context.commit('setUsers',res.data);
      return true;
    }catch (e) {
      console.error(e)
      return false;
    }
  },
  async deleteUser(context,id:number){
    try{
      await restApi.deleteUser(id)
      context.commit('deleteUsersUserById',id);
      return true;
    }catch (e) {
      console.error(e)
      return false;
    }
  },
  async updateUserInfo(context, user:IUser){
    try{
      if(!user || !user.id){
        throw new ErrorImpl(`IN updateUserInfo user || user.id is null, ${JSON.stringify(user)}`)
      }
      const res = await restApi.editUser(user)
      context.commit('updateUsersUser',res.data);
      return true;
    }catch (e) {
      console.error(e)
      return false;
    }
  },
  async updateUserPassword(context,user:IUser){
    try{
      if(!user || !user.id || !user.password){
        throw new ErrorImpl(`IN updateUserPassword user || user.id || user.password is null, ${JSON.stringify(user)}`)
      }
      // const res =
        await restApi.resetPassword(user)
      // context.commit('updateUsersUser',res.data);
      return true;
    }catch (e) {
      console.error(e)
      return false;
    }
  },
  async updateUserRoles(context,user:IUser){
    try{
      if(!user || !user.id || user.roles == null){
        throw new ErrorImpl(`IN updateUserRoles user || user.id || user.roles is null, ${JSON.stringify(user)}`)
      }
      const res =await restApi.setRoles(user)
      context.commit('updateUsersUser',res.data);
      return true;
    }catch (e) {
      console.error(e)
      return false;
    }
  },
  async updateUserChairman(context,user:IUser){
    try{
      if(!user || !user.id){
        throw new ErrorImpl(`IN updateUserChairman user || user.id is null, ${JSON.stringify(user)}`)
      }
      const res =await restApi.setChairman(user.id,user.chairman?.id || 0)
      context.commit('updateUsersUser',res.data);
      return true;
    }catch (e) {
      console.error(e)
      return false;
    }
  }

};

export default actions;

import {capitalize} from 'lodash'
import { IUser } from 'src/model/user/User'
import { ERole } from 'src/model/role/Role'
import store from 'src/store'

export interface UserUtilsInterface {
  isAdmin(user: IUser):boolean
  isChairman(user: IUser):boolean
  isLoggedIn(user: IUser): boolean
  hasRole(user : IUser | null,erole:ERole):boolean
  getShortFio(user: IUser | null):string
  getFio(user: IUser | null):string
  rolesEnumToNamedArray(separatorRegex:RegExp): Record<string, string>[]
  capitalizeUserFio(user : IUser):IUser
  isCurrentUserAdmin(): boolean
  isCurrentUserChairman(): boolean
}
export class UserUtils implements UserUtilsInterface {
  capitalizeUserFio(user : IUser):IUser{
    if(!user) return user
    user.firstName = capitalize(user.firstName || '')
    user.lastName = capitalize(user.lastName || '')
    user.middleName = capitalize(user.middleName || '')
    return user
  }

  hasRole(user : IUser | null,erole:ERole):boolean {
    if(!erole) return true;
    if(!user || !user.roles) return false;
    for(const role of user.roles){
      if(role.name == erole) return true;
    }
    return false;
  };
  isAdmin(user: IUser): boolean {
    if(user && user.roles){
      for(const role of user.roles){
        if(role.name == ERole.ADMIN) return true;
      }
    }
    return false;
  }
  isCurrentUserAdmin(): boolean {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const user = store.getters['user/getUser'] as  IUser

    if(user && user.roles){
      for(const role of user.roles){
        if(role.name == ERole.ADMIN) return true;
      }
    }
    return false;
  }
  isCurrentUserChairman(): boolean {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const user = store.getters['user/getUser'] as  IUser

    if(user && user.roles){
      for(const role of user.roles){
        if(role.name == ERole.CHAIRMAN) return true;
      }
    }
    return false;
  }
  isChairman(user: IUser): boolean {
    if(user && user.roles){
      for(const role of user.roles){
        if(role.name == ERole.CHAIRMAN) return true;
      }
    }
    return false;
  }

  isLoggedIn(user: IUser | null | undefined): boolean {
    return !!user;

  }
  public getFio(user: IUser | null):string {
    if(!user) return '';
    let res = ''
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access
    res+= `${capitalize(user.lastName ||'')} `
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access
    res+=`${capitalize(user.firstName ||'')} `
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/restrict-template-expressions,@typescript-eslint/no-unsafe-member-access
    res+=`${capitalize(user.middleName ||'')}`
    return res;
  }
  getShortFio(user: IUser | null):string {
    if(!user) return '';
    let res = ''
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/restrict-plus-operands
    res+=capitalize(user.lastName ||'')+' '
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/restrict-plus-operands
    res+=capitalize(user.firstName?.substr(0,1)?.concat('. ') ||'')
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/restrict-plus-operands
    res+=capitalize(user.middleName?.substr(0,1)?.concat('.') ||'')
    return res;
  }
  rolesEnumToNamedArray(separatorRegex = /_/g): {name:string}[] {
    return (Object.keys(ERole))
      .filter(key => isNaN(Number(key)))
      .map(key => ({
        name: String(key).replace(separatorRegex, ' '),
      }));
  }
}
const userUtils  = new UserUtils();
export default userUtils;

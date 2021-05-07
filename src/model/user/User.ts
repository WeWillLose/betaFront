import { IRole } from 'src/model/role/Role';

export interface IUser {
  id?: number | null,
  username?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  middleName?: string | null,
  roles?: IRole[] | null,
  chairman?: IUser | null,
  password?: string | null;
}

export interface IUserLogin {
  username: string;
  password: string;
}

export class UserLogin implements IUserLogin {
  password: string;
  username: string;

  constructor(password: string, username: string) {
    this.password = password;
    this.username = username;
  }
}

export class User implements IUser {
   chairman?: IUser | undefined | null;
   firstName?: string | undefined | null;
   id?: number | undefined | null;
   lastName?: string | undefined | null;
   middleName?: string | undefined | null;
   password?: string | undefined | null;
   roles?: IRole[] | undefined | null;
   username?: string | undefined | null;

  constructor(chairman?: IUser, firstName?: string, id?: number, lastName?: string,
              middleName?: string, password?: string, roles?: IRole[], username?: string) {
    this.chairman = chairman || {};
    this.firstName = firstName;
    this.id = id;
    this.lastName = lastName;
    this.middleName = middleName;
    this.password = password;
    this.roles = roles || [];
    this.username = username;
  }
}


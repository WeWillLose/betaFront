// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IUser } from 'src/model/user/User';

export interface UserStateInterface {
  user: IUser | null,
  users: IUser[],
  columns: Record<string, unknown>[]
}

function state(): UserStateInterface {
  return {
    user: null,
    users: [],
    columns:[
      {name: 'id', label: 'Id', field: 'id',sortable:true, align: 'center'},
      {name: 'username', label: 'Username', field: 'username',align: 'center',sortable:true},
      {name: 'firstName', label: 'Имя', field: 'firstName',align: 'center',sortable:true},
      {name: 'lastName', label: 'Фамилия', field: 'lastName',align: 'center',sortable:true},
      {name: 'middleName', label: 'Отчество', field: 'middleName',align: 'center',sortable:true},
      {name: 'roles', label: 'Роли', field: 'roles',align: 'center',sortable:true},
      {name: 'chairman', label: 'Председатель', field: 'chairman',align: 'center',sortable:true},
      {name: 'actions', label: 'Действия', field: 'actions',align: 'center',sortable:true},
    ]
  }
}

export default state;

import { ERole } from 'src/model/role/Role';

export interface ItemInterface {
  title?: string,
  caption?: string | null
  link?: string
  icon?: string | null
  iconColor?: string | null,
  role?: ERole | null,
  separator?: boolean
  onClick?: string
}

export interface HeaderStateInterface {
  isLeftDrawerOpen: boolean
  miniLeftDrawer: boolean
  leftDrawerMenuList: ItemInterface[]
  userMenuList: ItemInterface[]

}

function state(): HeaderStateInterface {
  return <HeaderStateInterface>{
    isLeftDrawerOpen: true,
    miniLeftDrawer: <boolean>true,
    leftDrawerMenuList: <ItemInterface[]>[
      {
        title: 'Администирование',
        caption: 'Только для администратора',
        icon: 'admin_panel_settings',
        link: 'admin',
        iconColor: 'blue',
        role: ERole.ADMIN,
        separator: true
      },
      // {
      //   title: 'Заметки',
      //   caption: 'Ваши заметки',
      //   icon: 'fas fa-list-alt',
      //   link: 'toDo',
      //   iconColor: 'blue',
      //   separator: true
      // },
      {
        title: 'Создать отчет',
        caption: 'Открыть форму создания отчета',
        icon: 'fas fa-file-word',
        link: 'createReport',
        iconColor: 'blue'
      },
      {
        title: 'Мои отчеты',
        caption: 'Мои созданные отчеты',
        icon: 'description',
        iconColor: 'blue',
        link: 'myReports'
      },
      {
        title: 'Отчеты учителей',
        caption: 'Отчеты учителей моей группы',
        icon: 'fas fa-paste',
        iconColor: 'blue',
        role: ERole.CHAIRMAN,
        link: 'followersReports',
        separator: true
      },
    ],
    userMenuList: <ItemInterface[]>[
      {
        title: 'Выйти',
        caption: '',
        icon: 'logout',
        iconColor: 'blue',
        link: '',
        onClick: 'logout',
        separator: true
      },
  ],
  }
}

export default state;

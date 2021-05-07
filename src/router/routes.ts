import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'createReport', component: () => import('pages/CreateReport.vue') },
      // { path: 'toDo', component: () => import('pages/ToDo.vue') },
      { path: 'myReports', component: () => import('pages/MyReports.vue') },
      { path: 'admin', component: () => import('pages/Admin.vue') },
      { path: 'followersReports', component: () => import('pages/FollowerReports.vue') },
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') },

    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;

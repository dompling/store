import { IRoute } from 'umi';

export default [
  {
    path: '/',
    component: '@/Layouts',
    routes: [
      {
        path: '/',
        redirect: '/menu',
      },
      {
        path: '/menu',
        component: '@/Layouts/layout',
        routes: [
          {
            path: '/menu',
            component: '@/pages/Home',
          },
          {
            path: '/menu/subscribe',
            component: '@/pages/Subscribe',
          },
          {
            path: '/menu/myInfo',
            component: '@/pages/User',
          },
        ],
      },
      {
        path: '/app/info/:author/:appId',
        component: '@/pages/AppInfo',
      },
    ],
  },
  {
    path: '/404',
    component: '@/pages/404',
  },
] as IRoute[];

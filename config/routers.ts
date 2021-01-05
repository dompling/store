import { IRoute } from "umi";

export default [
  {
    path: "/",
    redirect: "/menu"
  },
  {
    path: "/menu",
    component: "@/Layouts/layout",
    routes: [
      {
        path: "/menu",
        component: "@/pages/Home"
      },
      {
        path: "/menu/subscribe",
        component: "@/pages/Subscribe"
      }
    ]
  },
  {
    path: "/app/info/:appId",
    component: "@/pages/AppInfo"
  },
  {
    path: "/404",
    component: "@/pages/404"
  }
] as IRoute[];

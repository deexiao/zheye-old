/*
 * @Author: Dee.Xiao
 * @Date: 2022-09-05 01:40:17
 * @LastEditors: Dee.Xiao
 * @LastEditTime: 2022-09-06 01:37:00
 * @Description:
 */
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import ColumnDetail from "../views/ColumnDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/column/:id",
      name: "column",
      component: ColumnDetail,
    },
  ],
});

export default router;

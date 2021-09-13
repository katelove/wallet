import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/Home.vue"),
    },
    {
      path: "/login",
      name: "LoginPage",
      component: () => import("@/views/LoginPage.vue"),
    },
    {
    path: "/reset",
    name: "ResetPage",
    component: () => import("@/views/ResetPage.vue"),
    },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});


export default router;
